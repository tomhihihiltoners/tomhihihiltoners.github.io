const env = import.meta.env;

const readString = (value) => (typeof value === 'string' ? value.trim() : '');

const readNumber = (value, fallback) => {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

/**
 * Google OAuth client IDs are public identifiers, not secrets: Google ships them
 * inside every browser-side flow and they only grant access after the account
 * owner approves the consent screen. The client *secret* is never used here.
 * Override with VITE_GOOGLE_CLIENT_ID.
 *
 * The client must list these authorised JavaScript origins (authorised domains
 * also need the origin's domain registered in the Google Cloud console):
 *   https://dmitriicreativit.space
 *   https://tomhihihiltoners.github.io
 *   http://localhost:5173
 */
const DEFAULT_GOOGLE_CLIENT_ID =
  '567116258958-brq252t2fq0uo58mui9h8qtorghnn7r7.apps.googleusercontent.com';

export const googleCalendarConfig = {
  clientId: readString(env.VITE_GOOGLE_CLIENT_ID) || DEFAULT_GOOGLE_CLIENT_ID,
  calendarId: readString(env.VITE_GOOGLE_CALENDAR_ID) || 'primary',
};

export const defaultLocation = {
  label: readString(env.VITE_WEATHER_CITY) || 'Пермь',
  latitude: readNumber(env.VITE_WEATHER_LAT, 58.0105),
  longitude: readNumber(env.VITE_WEATHER_LON, 56.2502),
};

/**
 * Open-Meteo is keyless by default. A commercial (paid) key is supported through
 * the customer host, but it ships to the browser when set here, so it is kept out
 * of source control: supply it as VITE_OPEN_METEO_APIKEY in a git-ignored .env file.
 */
export const openMeteoConfig = {
  apiKey: readString(env.VITE_OPEN_METEO_APIKEY),
};
