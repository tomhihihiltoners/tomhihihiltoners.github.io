import { useCallback, useEffect, useState } from 'react';
import WeatherGlyph from './WeatherGlyph';
import { defaultLocation } from '../../lib/dashboardConfig';
import { fetchWeather } from '../../lib/openMeteo';

const weekdayFormatter = new Intl.DateTimeFormat('ru-RU', { weekday: 'short' });
const dayFormatter = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'short' });
const timeFormatter = new Intl.DateTimeFormat('ru-RU', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const REFRESH_MS = 10 * 60 * 1000;

function requestBrowserLocation() {
  return new Promise((resolve) => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      resolve(null);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) =>
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }),
      () => resolve(null),
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 10 * 60 * 1000 },
    );
  });
}

const formatTemp = (value) => (value === null ? '—' : `${Math.round(value)}°`);
const formatValue = (value, unit) => (value === null ? '—' : `${value}${unit}`);

export default function WeatherPanel() {
  const [place, setPlace] = useState(() => ({ ...defaultLocation, source: 'default' }));
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    requestBrowserLocation().then((coords) => {
      if (cancelled || !coords) return;
      setPlace({ label: 'Моё местоположение', ...coords, source: 'geo' });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setTick((value) => value + 1), REFRESH_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    setStatus('loading');
    setError('');

    fetchWeather({
      latitude: place.latitude,
      longitude: place.longitude,
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
  }, [place, tick]);

  const locate = useCallback(async () => {
    const coords = await requestBrowserLocation();
    if (!coords) {
      setError('Доступ к местоположению не получен — показываю погоду по умолчанию.');
      setPlace((value) => (value.source === 'default' ? { ...defaultLocation } : value));
      return;
    }
    setPlace({ label: 'Моё местоположение', ...coords, source: 'geo' });
  }, []);

  const current = weather?.current;

  return (
    <section className="panel panel--weather" aria-label="Погода">
      <header className="panel__head">
        <h2 className="panel__title">Погода</h2>
        <div className="cal-nav">
          <button
            type="button"
            className="cal-nav__button"
            onClick={locate}
            aria-label="Использовать моё местоположение"
            title="Использовать моё местоположение"
          >
            ⌖
          </button>
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
              <WeatherGlyph kind={current.kind} isDay={current.isDay} size={56} />
              <div>
                <p className="weather__temp">{formatTemp(current.temperature)}</p>
                <p className="weather__condition">{current.label}</p>
              </div>
            </div>

            <p className="weather__place">
              {place.label}
              {current.apparent !== null ? ` · ощущается ${formatTemp(current.apparent)}` : ''}
            </p>

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
              <p className="cal-section-label">Прогноз</p>
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
                обновлено {timeFormatter.format(weather.observedAt)} · {dayFormatter.format(weather.observedAt)}
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
