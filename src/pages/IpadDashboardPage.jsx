import { Link } from 'react-router-dom';
import CalendarPanel from '../components/dashboard/CalendarPanel';
import ClockPanel from '../components/dashboard/ClockPanel';
import WeatherPanel from '../components/dashboard/WeatherPanel';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import '../styles/ipad-dashboard.css';

export default function IpadDashboardPage() {
  useDocumentMeta(
    'iPad dashboard',
    'Часы, календарь Google и погода Open-Meteo в одном лёгком экране для iPad.',
  );

  return (
    <div className="ipad-shell">
      <header className="ipad-bar">
        <div className="ipad-bar__inner">
          <Link to="/" className="brand">
            Дмитрий Давыдов
          </Link>
          <p className="ipad-bar__label">iPad dashboard</p>
        </div>
      </header>

      <main className="ipad-main">
        <ClockPanel />
        <CalendarPanel />
        <WeatherPanel />
      </main>
    </div>
  );
}
