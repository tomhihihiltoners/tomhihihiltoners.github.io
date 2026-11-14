import { useEffect, useState } from 'react';

const timeFormatter = new Intl.DateTimeFormat('ru-RU', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});
const secondsFormatter = new Intl.DateTimeFormat('ru-RU', { second: '2-digit' });
const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

function toRecord(parts) {
  const record = {};
  for (const part of parts) {
    if (part.type !== 'literal') record[part.type] = part.value;
  }
  return record;
}

function useNow() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return now;
}

export default function ClockPanel() {
  const now = useNow();
  const time = toRecord(timeFormatter.formatToParts(now));
  const date = toRecord(dateFormatter.formatToParts(now));
  const seconds = secondsFormatter.format(now);
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'local';

  return (
    <section className="panel panel--clock" aria-label="Текущее время">
      <header className="panel__head">
        <h2 className="panel__title">Время</h2>
        <span className="panel__badge">{timezone}</span>
      </header>
      <div className="panel__body">
        <p className="clock__time">
          <span>
            {time.hour}:{time.minute}
          </span>
          <span className="clock__seconds">{seconds}</span>
        </p>
        <p className="clock__date">
          <span className="clock__weekday">{date.weekday}</span>
          <span>
            {date.day} {date.month} {date.year}
          </span>
        </p>
      </div>
    </section>
  );
}
