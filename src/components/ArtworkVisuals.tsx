/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

/**
 * High-fidelity 1987 VHS Still Visual of Rick Astley performing in the London studio
 */
export const RickAstleyStill: React.FC<{
  showScanlines?: boolean;
  className?: string;
  isDancing?: boolean;
}> = ({ showScanlines = true, className = '', isDancing = false }) => {
  return (
    <div className={`relative overflow-hidden bg-stone-950 ${className}`}>
      {/* Background Warehouse Brick & Studio Lighting */}
      <svg
        viewBox="0 0 1200 675"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        aria-label="Rick Astley performing Never Gonna Give You Up in 1987"
      >
        <defs>
          <radialGradient id="stageGlow" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#d97706" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
          </radialGradient>
          <linearGradient id="brickWall" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#292524" />
            <stop offset="50%" stopColor="#1c1917" />
            <stop offset="100%" stopColor="#0c0a09" />
          </linearGradient>
          <linearGradient id="trenchCoat" x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#d6c7b2" />
            <stop offset="50%" stopColor="#b8a78e" />
            <stop offset="100%" stopColor="#8c785b" />
          </linearGradient>
          <linearGradient id="hair80s" x1="0" y1="0" x2="1" y2="0.6">
            <stop offset="0%" stopColor="#9a3412" />
            <stop offset="50%" stopColor="#78350f" />
            <stop offset="100%" stopColor="#451a03" />
          </linearGradient>
          <linearGradient id="skinTone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#fba478" />
          </linearGradient>
          <pattern id="brickPattern" width="60" height="25" patternUnits="userSpaceOnUse">
            <rect width="60" height="25" fill="#1c1917" />
            <rect x="0" y="0" width="58" height="11" fill="#292524" opacity="0.4" />
            <rect x="30" y="12" width="58" height="11" fill="#292524" opacity="0.3" />
          </pattern>
        </defs>

        {/* Ambient background with brick pattern */}
        <rect width="1200" height="675" fill="url(#brickWall)" />
        <rect width="1200" height="675" fill="url(#brickPattern)" opacity="0.4" />
        <rect width="1200" height="675" fill="url(#stageGlow)" />

        {/* Architectural Archway behind singer */}
        <path
          d="M 400 675 L 400 240 Q 600 120 800 240 L 800 675 Z"
          fill="#0c0a09"
          opacity="0.85"
        />
        <path
          d="M 420 675 L 420 255 Q 600 145 780 255 L 780 675 Z"
          fill="none"
          stroke="#44403c"
          strokeWidth="6"
          opacity="0.4"
        />

        {/* Studio spotlight beam */}
        <polygon
          points="600,0 350,675 850,675"
          fill="#fef08a"
          opacity="0.08"
        />

        {/* Rick Astley Figure Group */}
        <g
          transform={`translate(${isDancing ? '0, -8' : '0, 0'})`}
          className={isDancing ? 'animate-bounce duration-700' : ''}
        >
          {/* Trench Coat Body Silhouette */}
          <path
            d="M 480 675 L 490 380 L 535 340 L 600 365 L 665 340 L 710 380 L 720 675 Z"
            fill="url(#trenchCoat)"
          />
          {/* Double Breasted Lapels & Collar */}
          <path
            d="M 535 340 L 585 460 L 615 460 L 665 340 L 600 370 Z"
            fill="#8c785b"
          />
          {/* Inner Striped Polo Shirt */}
          <path
            d="M 570 345 L 600 375 L 630 345 Z"
            fill="#1e293b"
          />
          <line x1="578" y1="353" x2="622" y2="353" stroke="#f8fafc" strokeWidth="2.5" />
          <line x1="583" y1="362" x2="617" y2="362" stroke="#f8fafc" strokeWidth="2.5" />

          {/* Trench coat buttons */}
          <circle cx="585" cy="480" r="5" fill="#451a03" />
          <circle cx="615" cy="480" r="5" fill="#451a03" />
          <circle cx="585" cy="520" r="5" fill="#451a03" />
          <circle cx="615" cy="520" r="5" fill="#451a03" />

          {/* Trench coat arms & hands */}
          <path
            d="M 490 380 L 450 500 L 490 515 L 520 420 Z"
            fill="#b8a78e"
          />
          <path
            d="M 710 380 L 750 500 L 710 515 L 680 420 Z"
            fill="#b8a78e"
          />
          {/* Hands */}
          <circle cx="460" cy="515" r="14" fill="url(#skinTone)" />
          <circle cx="740" cy="515" r="14" fill="url(#skinTone)" />

          {/* Neck */}
          <rect x="585" y="305" width="30" height="42" fill="url(#skinTone)" rx="4" />

          {/* Head & Youthful Face */}
          <path
            d="M 570 235 Q 600 205 630 235 Q 638 275 630 310 Q 600 330 570 310 Q 562 275 570 235 Z"
            fill="url(#skinTone)"
          />

          {/* Iconic 1980s Reddish Pompadour Hair */}
          <path
            d="M 560 245 C 550 200 575 160 605 160 C 635 160 655 190 645 235 C 635 200 585 195 560 245 Z"
            fill="url(#hair80s)"
          />
          <path
            d="M 585 170 C 620 165 640 185 645 220"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />

          {/* Eyes, Nose, Friendly Smile */}
          <circle cx="588" cy="265" r="3" fill="#1e293b" />
          <circle cx="612" cy="265" r="3" fill="#1e293b" />
          <path d="M 600 268 L 598 280 L 602 280" stroke="#c2410c" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 590 292 Q 600 300 610 292" stroke="#991b1b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </g>

        {/* Vintage Camcorder HUD / VHS Overlay Text in Viewport */}
        <text x="60" y="80" fill="#22c55e" fontFamily="'Space Mono', monospace" fontSize="24" fontWeight="bold" letterSpacing="2">
          PLAY ▶ SP
        </text>
        <text x="1000" y="80" fill="#e2e8f0" fontFamily="'Space Mono', monospace" fontSize="22" letterSpacing="1">
          0:03:32
        </text>

        {/* Camcorder Battery Icon */}
        <rect x="60" y="105" width="40" height="18" fill="none" stroke="#22c55e" strokeWidth="2" rx="2" />
        <rect x="100" y="110" width="4" height="8" fill="#22c55e" />
        <rect x="64" y="109" width="22" height="10" fill="#22c55e" />

        {/* Archival lower-third stamp */}
        <rect x="60" y="580" width="340" height="45" fill="#000000" opacity="0.7" rx="4" />
        <text x="80" y="608" fill="#f59e0b" fontFamily="'Space Mono', monospace" fontSize="16" fontWeight="bold">
          PWL STUDIOS LONDON · 1987
        </text>
      </svg>

      {/* Simulated VHS Scanlines Overlay */}
      {showScanlines && (
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.75) 50%)',
            backgroundSize: '100% 4px',
          }}
        />
      )}

      {/* Subtle CRT Phosphor Grain Scrim */}
      <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/70 pointer-events-none" />
    </div>
  );
};
