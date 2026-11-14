const CLOUD_PATH =
  'M10.5 29.5a5.75 5.75 0 0 1 .55-11.47A8.6 8.6 0 0 1 27.9 19.6a5.1 5.1 0 0 1-.6 9.9Z';

const RAYS = [
  [20, 4, 20, 8.5],
  [20, 31.5, 20, 36],
  [4, 20, 8.5, 20],
  [31.5, 20, 36, 20],
  [8.8, 8.8, 12, 12],
  [28, 28, 31.2, 31.2],
  [31.2, 8.8, 28, 12],
  [12, 28, 8.8, 31.2],
];

function Cloud({ opacity = 1 }) {
  return (
    <path
      d={CLOUD_PATH}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
      strokeLinecap="round"
      opacity={opacity}
    />
  );
}

/**
 * Compact line-art weather glyph so the dashboard stays dependency-free.
 * `kind` matches the categories produced by src/lib/openMeteo.js.
 */
export default function WeatherGlyph({ kind = 'overcast', isDay = true, size = 44 }) {
  return (
    <svg
      className="weather__glyph"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      {kind === 'clear' ? (
        isDay ? (
          <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <circle cx="20" cy="20" r="6.5" fill="currentColor" fillOpacity="0.22" />
            {RAYS.map(([x1, y1, x2, y2]) => (
              <line key={`${x1}-${y1}-${x2}-${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} />
            ))}
          </g>
        ) : (
          <path
            d="M25 9a12.5 12.5 0 1 0 7.4 21.6A14.2 14.2 0 0 1 25 9Z"
            fill="currentColor"
            fillOpacity="0.18"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        )
      ) : null}

      {kind === 'partly' ? (
        <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <circle cx="14" cy="13" r="4.2" fill="currentColor" fillOpacity="0.18" />
          <line x1="14" y1="5" x2="14" y2="7" />
          <line x1="6.5" y1="13" x2="8.5" y2="13" />
          <line x1="8" y1="7" x2="9.6" y2="8.6" />
          <path
            d="M16 33a5.2 5.2 0 0 1 .5-10.4A7.8 7.8 0 0 1 31.8 24a4.6 4.6 0 0 1-.55 9Z"
            fill="none"
            strokeLinejoin="round"
          />
        </g>
      ) : null}

      {kind === 'overcast' ? (
        <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <g opacity="0.55" transform="translate(3 -5) scale(0.86)">
            <Cloud />
          </g>
          <Cloud />
        </g>
      ) : null}

      {kind === 'fog' ? (
        <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <Cloud />
          <line x1="11" y1="34" x2="29" y2="34" />
          <line x1="14" y1="37.5" x2="26" y2="37.5" opacity="0.6" />
        </g>
      ) : null}

      {kind === 'drizzle' ? (
        <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <g transform="translate(0 -3) scale(1 0.86)">
            <Cloud />
          </g>
          <line x1="15" y1="34" x2="14" y2="36.5" />
          <line x1="21" y1="34" x2="20" y2="36.5" />
          <line x1="27" y1="34" x2="26" y2="36.5" />
        </g>
      ) : null}

      {kind === 'rain' ? (
        <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <g transform="translate(0 -3) scale(1 0.86)">
            <Cloud />
          </g>
          <line x1="14" y1="33" x2="12" y2="38" />
          <line x1="20" y1="33" x2="18" y2="38" />
          <line x1="26" y1="33" x2="24" y2="38" />
        </g>
      ) : null}

      {kind === 'snow' ? (
        <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          <g transform="translate(0 -3) scale(1 0.86)">
            <Cloud />
          </g>
          <circle cx="14" cy="35.5" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="20" cy="35.5" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="26" cy="35.5" r="1.4" fill="currentColor" stroke="none" />
        </g>
      ) : null}

      {kind === 'storm' ? (
        <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <g transform="translate(0 -4) scale(1 0.84)">
            <Cloud />
          </g>
          <path d="M21 31l-4 5h4l-2 4 6-6h-4l2-3z" fill="currentColor" stroke="none" />
        </g>
      ) : null}
    </svg>
  );
}
