import { useEffect, useState } from 'react';
import WeatherGlyph from './WeatherGlyph';
import { openMeteoConfig, weatherLocation } from '../../lib/dashboardConfig';
import { fetchWeather } from '../../lib/openMeteo';

const dayFormatter = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' });
const longDayFormatter = new Intl.DateTimeFormat('ru-RU', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
});
const timeFormatter = new Intl.DateTimeFormat('ru-RU', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const REFRESH_MS = 10 * 60 * 1000;

/** Local hours shown in the "today by hour" strip. */
const TODAY_HOURS = [8, 10, 12, 14, 16, 18, 20, 22];

const formatTemp = (value) => (value === null ? '—' : `${Math.round(value)}°`);
const formatValue = (value, unit) => (value === null ? '—' : `${value}${unit}`);
const formatPercent = (value) => (value === null ? '—' : `${value}%`);

/** Open-Meteo returns local ISO strings such as "2026-11-14T08:24". */
const clockTime = (iso) => (typeof iso === 'string' && iso.length >= 16 ? iso.slice(11, 16) : null);

export default function WeatherPanel() {
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTick((value) => value + 1), REFRESH_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    setStatus('loading');
    setError('');

    fetchWeather({
      latitude: weatherLocation.latitude,
      longitude: weatherLocation.longitude,
      apiKey: openMeteoConfig.apiKey,
      signal: controller.signal,
    })
      .then((data) => {
        setWeather(data);
        setStatus('ready');
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setError(err.message);
        setStatus('error');
      });

    return () => controller.abort();
  }, [tick]);

  const current = weather?.current;
  const today = weather?.daily?.[0];
  const tomorrow = weather?.daily?.[1] ?? null;

  const todayKey = weather?.hourly?.[0]?.isoDate ?? null;
  const todayHours = weather
    ? weather.hourly.filter((entry) => entry.isoDate === todayKey && TODAY_HOURS.includes(entry.hour))
    : [];
  const nowHour = weather ? weather.observedAt.getHours() : -1;
  /** The listed slot that is currently in effect (or the most recent one). */
  const activeHour = todayHours.reduce(
    (active, entry) => (entry.hour <= nowHour ? entry.hour : active),
    null,
  );

  const sunrise = clockTime(today?.sunrise);
  const sunset = clockTime(today?.sunset);
  const tomorrowSunrise = clockTime(tomorrow?.sunrise);
  const tomorrowSunset = clockTime(tomorrow?.sunset);

  return (
    <section className="panel panel--weather" aria-label="Погода в Челябинске">
      <header className="panel__head">
        <h2 className="panel__title">Погода</h2>
        <div className="cal-nav">
          <button
            type="button"
            className="cal-nav__button"
            onClick={() => setTick((value) => value + 1)}
            aria-label="Обновить погоду"
            title="Обновить"
          >
            ↻
          </button>
        </div>
      </header>

      <div className="panel__body">
        {error ? <p className="cal-status cal-status--error">{error}</p> : null}

        {!current && status === 'loading' ? <p className="cal-empty">Загрузка погоды…</p> : null}

        {current ? (
          <>
            <div className="weather__now">
              <WeatherGlyph kind={current.kind} isDay={current.isDay} size={64} />
              <div>
                <p className="weather__temp">{formatTemp(current.temperature)}</p>
                <p className="weather__condition">{current.label}</p>
                <p className="weather__place">
                  {weatherLocation.label} · ощущается {formatTemp(current.apparent)}
                </p>
              </div>
            </div>

            <div className="weather__metrics">
              <div className="metric">
                <span className="metric__label">Ветер</span>
                <span className="metric__value">
                  {formatValue(current.windSpeed, ' м/с')} · {current.windDirection}
                </span>
              </div>
              <div className="metric">
                <span className="metric__label">Влажность</span>
                <span className="metric__value">{formatValue(current.humidity, ' %')}</span>
              </div>
              <div className="metric">
                <span className="metric__label">Осадки</span>
                <span className="metric__value">{formatValue(current.precipitation, ' мм')}</span>
              </div>
              <div className="metric">
                <span className="metric__label">Порывы</span>
                <span className="metric__value">{formatValue(current.windGust, ' м/с')}</span>
              </div>
            </div>

            <div className="hourly">
              <p className="cal-section-label">Сегодня по часам</p>
              <div className="hourly__row">
                {todayHours.map((entry) => (
                  <div
                    className={
                      entry.hour === activeHour ? 'hourly__cell hourly__cell--now' : 'hourly__cell'
                    }
                    key={entry.time}
                  >
                    <span className="hourly__time">{entry.time.slice(11, 16)}</span>
                    <WeatherGlyph kind={entry.kind} isDay={entry.isDay} size={26} />
                    <span className="hourly__temp">{formatTemp(entry.temperature)}</span>
                    <span className="hourly__precip">
                      {formatPercent(entry.precipitationProbability)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {tomorrow ? (
              <div className="tomorrow">
                <p className="cal-section-label">Завтра</p>
                <div className="tomorrow__card">
                  <div className="tomorrow__main">
                    <WeatherGlyph kind={tomorrow.kind} size={38} />
                    <div className="tomorrow__text">
                      <p className="tomorrow__weekday">
                        {longDayFormatter.format(tomorrow.date)}
                      </p>
                      <p className="tomorrow__condition">{tomorrow.label}</p>
                    </div>
                    <p className="tomorrow__temps">
                      <span className="tomorrow__max">{formatTemp(tomorrow.max)}</span>
                      <span className="tomorrow__min">{formatTemp(tomorrow.min)}</span>
                    </p>
                  </div>
                  <p className="tomorrow__extra">
                    <span>осадки {formatPercent(tomorrow.precipitationProbability)}</span>
                    {tomorrowSunrise ? (
                      <span>
                        восход {tomorrowSunrise} · закат {tomorrowSunset}
                      </span>
                    ) : null}
                  </p>
                </div>
              </div>
            ) : null}

            <p className="weather__footer">
              <span>
                {sunrise ? `сегодня: восход ${sunrise} · закат ${sunset}` : 'солнце: нет данных'}
              </span>
              <span>
                обновлено {timeFormatter.format(weather.observedAt)} ·{' '}
                {dayFormatter.format(weather.observedAt)}
              </span>
              <a href="https://open-meteo.com/" target="_blank" rel="noreferrer noopener">
                Open-Meteo
              </a>
            </p>
          </>
        ) : null}
      </div>
    </section>
  );
}
