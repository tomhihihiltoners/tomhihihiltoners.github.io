import { useCallback, useEffect, useMemo, useState } from 'react';
import { googleCalendarConfig } from '../../lib/dashboardConfig';
import {
  fetchCalendarEvents,
  getCachedToken,
  requestAccessToken,
} from '../../lib/googleCalendar';

const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const MONTHS_AHEAD = 2;

const monthFormatter = new Intl.DateTimeFormat('ru-RU', { month: 'long' });
const selectedDayFormatter = new Intl.DateTimeFormat('ru-RU', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
});
const timeFormatter = new Intl.DateTimeFormat('ru-RU', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

const dayKey = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
    date.getDate(),
  ).padStart(2, '0')}`;

const startOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1);
const addMonths = (date, amount) => new Date(date.getFullYear(), date.getMonth() + amount, 1);

function buildCells(monthDate) {
  const first = startOfMonth(monthDate);
  const offset = (first.getDay() + 6) % 7; // Monday-first week
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(first.getFullYear(), first.getMonth(), 1 - offset + index);
    return {
      date,
      key: dayKey(date),
      inMonth: date.getMonth() === monthDate.getMonth(),
    };
  });
}

function EventRow({ event }) {
  return (
    <li className="event-item">
      <span className="event-item__time">
        {event.allDay ? 'день' : timeFormatter.format(event.start)}
      </span>
      <div>
        <p className="event-item__title">{event.title}</p>
        {event.location ? <p className="event-item__meta">{event.location}</p> : null}
      </div>
    </li>
  );
}

export default function CalendarPanel() {
  const [token, setToken] = useState(() => getCachedToken());
  const [viewDate, setViewDate] = useState(() => startOfMonth(new Date()));
  const [selectedKey, setSelectedKey] = useState(() => dayKey(new Date()));
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState(() => (getCachedToken() ? 'loading' : 'idle'));
  const [error, setError] = useState('');

  const todayKey = dayKey(new Date());
  const cells = useMemo(() => buildCells(viewDate), [viewDate]);

  useEffect(() => {
    if (!token) return undefined;

    let active = true;
    const timeMin = startOfMonth(viewDate);
    const timeMax = new Date(viewDate.getFullYear(), viewDate.getMonth() + MONTHS_AHEAD, 1);

    setStatus('loading');
    setError('');

    fetchCalendarEvents({
      accessToken: token.accessToken,
      calendarId: googleCalendarConfig.calendarId,
      timeMin,
      timeMax,
    })
      .then((list) => {
        if (!active) return;
        setEvents(list);
        setStatus('ready');
      })
      .catch((err) => {
        if (!active) return;
        setError(err.message);
        setStatus('error');
        if (!getCachedToken()) setToken(null);
      });

    return () => {
      active = false;
    };
  }, [token, viewDate]);

  const eventsByDay = useMemo(() => {
    const map = new Map();
    for (const event of events) {
      const key = dayKey(event.start);
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(event);
    }
    return map;
  }, [events]);

  const selectedEvents = eventsByDay.get(selectedKey) ?? [];

  const upcoming = useMemo(() => {
    const now = Date.now();
    return events.filter((event) => event.end.getTime() >= now).slice(0, 2);
  }, [events]);

  const connect = useCallback(async () => {
    setStatus('connecting');
    setError('');
    try {
      const next = await requestAccessToken(googleCalendarConfig.clientId);
      setToken(next);
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  }, []);

  const isConnected = Boolean(token);
  const selectedDate = selectedKey === todayKey ? new Date() : null;

  return (
    <section className="panel panel--calendar" aria-label="Календарь Google">
      <header className="panel__head">
        <h2 className="panel__title">Календарь</h2>
        <div className="cal-nav">
          <button
            type="button"
            className="cal-nav__button"
            onClick={() => setViewDate((current) => addMonths(current, -1))}
            aria-label="Предыдущий месяц"
          >
            ‹
          </button>
          <button
            type="button"
            className="cal-nav__button"
            onClick={() => setViewDate(startOfMonth(new Date()))}
          >
            Сегодня
          </button>
          <button
            type="button"
            className="cal-nav__button"
            onClick={() => setViewDate((current) => addMonths(current, 1))}
            aria-label="Следующий месяц"
          >
            ›
          </button>
        </div>
      </header>

      <div className="panel__body">
        <p className="cal-month">
          {monthFormatter.format(viewDate)} {viewDate.getFullYear()}
        </p>

        <div className="cal-grid" role="grid" aria-label="Дни месяца">
          {WEEKDAYS.map((label) => (
            <span key={label} className="cal-dow" role="columnheader">
              {label}
            </span>
          ))}
          {cells.map((cell) => {
            const hasEvents = (eventsByDay.get(cell.key)?.length ?? 0) > 0;
            const classes = [
              'cal-cell',
              cell.inMonth ? '' : 'cal-cell--muted',
              cell.key === todayKey ? 'cal-cell--today' : '',
              cell.key === selectedKey ? 'cal-cell--selected' : '',
              hasEvents ? 'cal-cell--events' : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <button
                key={cell.key}
                type="button"
                className={classes}
                onClick={() => setSelectedKey(cell.key)}
                aria-pressed={cell.key === selectedKey}
                aria-label={`${selectedDayFormatter.format(cell.date)}${
                  hasEvents ? ', есть события' : ''
                }`}
              >
                {cell.date.getDate()}
              </button>
            );
          })}
        </div>

        {!isConnected ? (
          <>
            <p className="cal-status">
              Календарь не подключён. Вход в Google откроется во всплывающем окне и запросит доступ
              только на чтение.
            </p>
            <button
              type="button"
              className="button button--primary cal-connect"
              onClick={connect}
              disabled={status === 'connecting'}
            >
              {status === 'connecting' ? 'Подключение…' : 'Подключить Google Календарь'}
            </button>
          </>
        ) : null}

        {error ? <p className="cal-status cal-status--error">{error}</p> : null}

        {isConnected ? (
          <>
            <div className="cal-divider" />
            <p className="cal-section-label">
              {selectedDate ? 'Сегодня' : selectedDayFormatter.format(new Date(`${selectedKey}T12:00:00`))}
            </p>
            {status === 'loading' && selectedEvents.length === 0 ? (
              <p className="cal-empty">Загрузка событий…</p>
            ) : selectedEvents.length > 0 ? (
              <ul className="event-list">
                {selectedEvents.map((event) => (
                  <EventRow key={event.id} event={event} />
                ))}
              </ul>
            ) : (
              <p className="cal-empty">На этот день событий нет.</p>
            )}

            {upcoming.length > 0 ? (
              <>
                <div className="cal-divider" />
                <p className="cal-section-label">Далее</p>
                <ul className="event-list">
                  {upcoming.map((event) => (
                    <EventRow key={`next-${event.id}`} event={event} />
                  ))}
                </ul>
              </>
            ) : null}
          </>
        ) : null}
      </div>
    </section>
  );
}
