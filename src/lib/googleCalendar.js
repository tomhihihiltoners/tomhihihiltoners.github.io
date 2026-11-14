const GIS_SRC = 'https://accounts.google.com/gsi/client';
const TOKEN_STORAGE_KEY = 'pageforipad:google-token';
const EXPIRY_MARGIN_MS = 60_000;

export const CALENDAR_SCOPE = 'https://www.googleapis.com/auth/calendar.readonly';

let loaderPromise = null;

function loadGoogleIdentity() {
  if (window.google?.accounts?.oauth2) return Promise.resolve(window.google);
  if (loaderPromise) return loaderPromise;

  loaderPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = GIS_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.google?.accounts?.oauth2) resolve(window.google);
      else reject(new Error('Google Identity Services загрузился без OAuth2.'));
    };
    script.onerror = () => {
      loaderPromise = null;
      reject(new Error('Не удалось загрузить Google Identity Services.'));
    };
    document.head.appendChild(script);
  });

  return loaderPromise;
}

function readStoredToken() {
  try {
    const raw = sessionStorage.getItem(TOKEN_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed?.accessToken || parsed.expiresAt - EXPIRY_MARGIN_MS <= Date.now()) return null;
    return parsed;
  } catch {
    return null;
  }
}

function storeToken(token) {
  try {
    if (token) sessionStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(token));
    else sessionStorage.removeItem(TOKEN_STORAGE_KEY);
  } catch {
    /* private mode: keep the token in memory only */
  }
}

export function getCachedToken() {
  return readStoredToken();
}

export function forgetToken() {
  storeToken(null);
}

/**
 * Opens the Google consent popup. Must be called from a user gesture.
 * Uses the Google Identity Services token model, so no client secret and no
 * server-side code is needed.
 */
export async function requestAccessToken(clientId) {
  const google = await loadGoogleIdentity();

  return new Promise((resolve, reject) => {
    const client = google.accounts.oauth2.initTokenClient({
      client_id: clientId,
      scope: CALENDAR_SCOPE,
      callback: (response) => {
        if (response?.error) {
          reject(new Error(response.error_description || response.error));
          return;
        }
        const token = {
          accessToken: response.access_token,
          expiresAt: Date.now() + (Number(response.expires_in) || 3599) * 1000,
        };
        storeToken(token);
        resolve(token);
      },
      error_callback: (error) => {
        reject(new Error(error?.message || 'Вход в Google отменён.'));
      },
    });

    client.requestAccessToken();
  });
}

function normaliseEvent(item) {
  const startValue = item.start?.dateTime ?? item.start?.date;
  const endValue = item.end?.dateTime ?? item.end?.date;
  if (!startValue) return null;

  const allDay = !item.start?.dateTime;
  const start = new Date(allDay ? `${startValue}T00:00:00` : startValue);
  const end = endValue ? new Date(allDay ? `${endValue}T00:00:00` : endValue) : start;

  if (Number.isNaN(start.getTime())) return null;

  return {
    id: item.id,
    title: item.summary?.trim() || 'Без названия',
    start,
    end,
    allDay,
    location: item.location?.trim() || '',
  };
}

export async function fetchCalendarEvents({ accessToken, calendarId, timeMin, timeMax }) {
  const url = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`,
  );
  url.searchParams.set('singleEvents', 'true');
  url.searchParams.set('orderBy', 'startTime');
  url.searchParams.set('timeMin', timeMin.toISOString());
  url.searchParams.set('timeMax', timeMax.toISOString());
  url.searchParams.set('maxResults', '250');

  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (response.status === 401) {
    forgetToken();
    throw new Error('Срок доступа к Google Календарю истёк. Подключите календарь снова.');
  }

  if (!response.ok) {
    let detail = '';
    try {
      const body = await response.json();
      detail = body?.error?.message ?? '';
    } catch {
      /* ignore malformed error bodies */
    }
    throw new Error(detail || `Google Calendar вернул ${response.status}`);
  }

  const payload = await response.json();
  return (payload.items ?? []).map(normaliseEvent).filter(Boolean);
}
