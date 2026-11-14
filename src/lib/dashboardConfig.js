const env = import.meta.env;

const readString = (value) => (typeof value === 'string' ? value.trim() : '');

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

/**
 * Fixed dashboard location. The weather widget always shows Chelyabinsk:
 * geolocation is never requested and the city is not user-selectable.
 */
export const weatherLocation = {
  label: 'Челябинск',
  latitude: 55.1644,
  longitude: 61.4368,
};

/**
 * Open-Meteo is keyless by default. A commercial (paid) key is supported through
 * the customer host, but it ships to the browser when set here, so it is kept out
 * of source control: supply it as VITE_OPEN_METEO_APIKEY in a git-ignored .env file.
 */
export const openMeteoConfig = {
  apiKey: readString(env.VITE_OPEN_METEO_APIKEY),
};
