import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

function NotFoundPage() {
  useDocumentMeta('Page not found', 'The requested page does not exist.');

  return (
    <main className="container not-found-shell">
      <div className="not-found-card">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <Link to="/" className="button button--primary">
          Return home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
