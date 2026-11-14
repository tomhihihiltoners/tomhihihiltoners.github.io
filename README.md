# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## iPad dashboard (`/pageforipad`)

A lightweight, iPad-first dashboard: a large clock, a Google Calendar month view with
upcoming events, and an Open-Meteo weather card. It reuses the site's design tokens and
fonts; the page lives in `src/pages/IpadDashboardPage.jsx`, panels in
`src/components/dashboard/`, styles in `src/styles/ipad-dashboard.css`.

### Credentials

| Integration | What it needs | Where it lives |
| --- | --- | --- |
| Google Calendar | OAuth **client ID** (public identifier, not a secret) | `VITE_GOOGLE_CLIENT_ID`, or the fallback in `src/lib/dashboardConfig.js` |
| Open-Meteo | Nothing — the free API is keyless | optional `VITE_OPEN_METEO_APIKEY` (git-ignored) for a paid plan |

No client secret, API key or private token is ever shipped to the browser. Google
Calendar uses the Google Identity Services token flow with the read-only scope
`calendar.readonly`; the access token stays in `sessionStorage` for the tab session only.
Open-Meteo is a public, CORS-enabled API called directly from the page.

If you hold a **commercial** Open-Meteo subscription, set `VITE_OPEN_METEO_APIKEY` in a
git-ignored `.env.local`; the client then targets `customer-api.open-meteo.com`. That key
is compiled into the public bundle, so treat it as a quota-limited identifier, not a
secret, or move the request behind a proxy before enabling it.

### Google project setup

1. Enable **Google Calendar API** in the [Google Cloud console](https://console.cloud.google.com/apis/library/calendar-json.googleapis.com).
2. Create an **OAuth client ID** of type *Web application* under *APIs & Services → Credentials*.
3. Add the authorised JavaScript origins that serve the page:
   `https://dmitriicreativit.space` (the live custom domain — required),
   `https://tomhihihiltoners.github.io` and `http://localhost:5173`.
   Under *Authorised domains*, add `dmitriicreativit.space` and
   `tomhihihiltoners.github.io`.
4. Put the client ID in `.env.local` as `VITE_GOOGLE_CLIENT_ID=...`, or rely on the
   fallback already in `src/lib/dashboardConfig.js`.
5. On the **OAuth consent screen**, add the Google account you sign in with as a test user
   while the app is in *Testing* mode.

`.env.example` documents every variable; `.env*` files are git-ignored.

### Local run

```bash
npm install
npm run dev   # http://localhost:5173/pageforipad
```

### Deployment

`.github/workflows/deploy.yml` builds the project and publishes `dist/` with GitHub Pages.
The build also mirrors `index.html` to `pageforipad/index.html` and to `404.html`, so the
deep link `/pageforipad` resolves on GitHub Pages, which serves static files only.
`public/CNAME` pins the custom domain `dmitriicreativit.space`, which is where the site
is publicly served (`https://tomhihihiltoners.github.io` redirects to it).

### Location

The dashboard always shows **Chelyabinsk, Russia** (`55.1644, 61.4368`), fixed in
`src/lib/dashboardConfig.js`. It never requests browser geolocation and the city is not
user-selectable, so the widget cannot silently drift to another location.

### Layout

Tuned for landscape iPad: the weather panel is the primary surface, filling the full
height of the wide right column, while the clock (a compact single row) and the calendar
stack down a narrow left rail. Portrait and narrow screens collapse to one column with
the order clock → weather → calendar, and the 7-day forecast becomes a swipeable strip
below 620px.
