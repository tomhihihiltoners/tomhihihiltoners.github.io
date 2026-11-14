/**
 * Open-Meteo client. Public, keyless and CORS-enabled, so it is called straight
 * from the browser: https://open-meteo.com/en/docs
 */
const FORECAST_ENDPOINT = 'https://api.open-meteo.com/v1/forecast';

const CURRENT_FIELDS = [
  'temperature_2m',
  'relative_humidity_2m',
  'apparent_temperature',
  'is_day',
  'precipitation',
  'weather_code',
  'wind_speed_10m',
  'wind_gusts_10m',
  'wind_direction_10m',
].join(',');

const DAILY_FIELDS = [
  'weather_code',
  'temperature_2m_max',
  'temperature_2m_min',
  'precipitation_probability_max',
  'sunrise',
  'sunset',
].join(',');

const CONDITIONS = new Map([
  [0, { label: 'Ясно', kind: 'clear' }],
  [1, { label: 'Преимущественно ясно', kind: 'clear' }],
  [2, { label: 'Переменная облачность', kind: 'partly' }],
  [3, { label: 'Пасмурно', kind: 'overcast' }],
  [45, { label: 'Туман', kind: 'fog' }],
  [48, { label: 'Изморозь', kind: 'fog' }],
  [51, { label: 'Слабая морось', kind: 'drizzle' }],
  [53, { label: 'Морось', kind: 'drizzle' }],
  [55, { label: 'Сильная морось', kind: 'drizzle' }],
  [56, { label: 'Ледяная морось', kind: 'drizzle' }],
  [57, { label: 'Ледяная морось', kind: 'drizzle' }],
  [61, { label: 'Небольшой дождь', kind: 'rain' }],
  [63, { label: 'Дождь', kind: 'rain' }],
  [65, { label: 'Сильный дождь', kind: 'rain' }],
  [66, { label: 'Ледяной дождь', kind: 'rain' }],
  [67, { label: 'Ледяной дождь', kind: 'rain' }],
  [71, { label: 'Небольшой снег', kind: 'snow' }],
  [73, { label: 'Снег', kind: 'snow' }],
  [75, { label: 'Сильный снег', kind: 'snow' }],
  [77, { label: 'Снежная крупа', kind: 'snow' }],
  [80, { label: 'Ливень', kind: 'rain' }],
  [81, { label: 'Ливень', kind: 'rain' }],
  [82, { label: 'Сильный ливень', kind: 'rain' }],
  [85, { label: 'Снегопад', kind: 'snow' }],
  [86, { label: 'Сильный снегопад', kind: 'snow' }],
  [95, { label: 'Гроза', kind: 'storm' }],
  [96, { label: 'Гроза с градом', kind: 'storm' }],
  [99, { label: 'Сильная гроза с градом', kind: 'storm' }],
]);

const COMPASS = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];

function round(value, digits = 0) {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return null;
  const factor = 10 ** digits;
  return Math.round(parsed * factor) / factor;
}

export function describeWeatherCode(code) {
  return CONDITIONS.get(Number(code)) ?? { label: 'Нет данных', kind: 'overcast' };
}

export function compassLabel(degrees) {
  const parsed = Number(degrees);
  if (!Number.isFinite(parsed)) return '—';
  return COMPASS[Math.round(((parsed % 360) + 360) % 360 / 45) % 8];
}

export async function fetchWeather({ latitude, longitude, signal }) {
  const params = new URLSearchParams({
    latitude: String(latitude),
    longitude: String(longitude),
    current: CURRENT_FIELDS,
    daily: DAILY_FIELDS,
    timezone: 'auto',
    forecast_days: '7',
    wind_speed_unit: 'ms',
  });

  const response = await fetch(`${FORECAST_ENDPOINT}?${params.toString()}`, {
    signal,
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`Open-Meteo вернул ${response.status}`);
  }

  const payload = await response.json();
  const current = payload.current ?? {};
  const daily = payload.daily ?? {};
  const condition = describeWeatherCode(current.weather_code);

  return {
    timezone: payload.timezone ?? null,
    observedAt: current.time ? new Date(current.time) : new Date(),
    current: {
      temperature: round(current.temperature_2m),
      apparent: round(current.apparent_temperature),
      humidity: round(current.relative_humidity_2m),
      precipitation: round(current.precipitation, 1),
      windSpeed: round(current.wind_speed_10m, 1),
      windGust: round(current.wind_gusts_10m, 1),
      windDirection: compassLabel(current.wind_direction_10m),
      isDay: Number(current.is_day) !== 0,
      label: condition.label,
      kind: condition.kind,
    },
    daily: (daily.time ?? []).map((time, index) => {
      const dayCondition = describeWeatherCode(daily.weather_code?.[index]);
      return {
        date: new Date(`${time}T12:00:00`),
        max: round(daily.temperature_2m_max?.[index]),
        min: round(daily.temperature_2m_min?.[index]),
        precipitationProbability: round(daily.precipitation_probability_max?.[index]),
        sunrise: daily.sunrise?.[index] ?? null,
        sunset: daily.sunset?.[index] ?? null,
        label: dayCondition.label,
        kind: dayCondition.kind,
      };
    }),
  };
}
