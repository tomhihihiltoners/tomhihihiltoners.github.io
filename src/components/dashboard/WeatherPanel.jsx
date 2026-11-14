import { useEffect, useState } from 'react';
import WeatherGlyph from './WeatherGlyph';
import { openMeteoConfig, weatherLocation } from '../../lib/dashboardConfig';
import { fetchWeather } from '../../lib/openMeteo';

const weekdayFormatter = new Intl.DateTimeFormat('ru-RU', { weekday: 'short' });
const dayFormatter = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' });
const timeFormatter = new Intl.DateTimeFormat('ru-RU', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const REFRESH_MS = 10 * 60 * 1000;

const formatTemp = (value) => (value === null ? '—' : `${Math.round(value)}°`);
const formatValue = (value, unit) => (value === null ? '—' : `${value}${unit}`);

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
  const sunrise = clockTime(today?.sunrise);
  const sunset = clockTime(today?.sunset);

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

            <div className="forecast">
              <p className="cal-section-label">Прогноз на 7 дней</p>
              <div className="forecast__row">
                {weather.daily.map((day, index) => (
                  <div className="forecast__day" key={day.date.toISOString()}>
                    <span className="forecast__weekday">
                      {index === 0 ? 'сегодня' : weekdayFormatter.format(day.date)}
                    </span>
                    <WeatherGlyph kind={day.kind} size={30} />
                    <span className="forecast__temp">
                      {formatTemp(day.max)} <span>{formatTemp(day.min)}</span>
                    </span>
                    <span className="forecast__precip">
                      {day.precipitationProbability === null
                        ? '—'
                        : `${day.precipitationProbability}%`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="weather__footer">
              <span>
                {sunrise ? `восход ${sunrise} · закат ${sunset}` : 'солнце: нет данных'}
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
