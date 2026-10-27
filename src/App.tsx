/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { applyTypographyConfig } from './config/typography.ts';
import { Navigation } from './components/Navigation.tsx';

// Rick Astley — Never Gonna Give You Up (Complete Visual History of Rickrolling)
import { PartOneHero } from './components/part1/PartOneHero.tsx';
import { PartOnePopSong1987 } from './components/part1/PartOnePopSong1987.tsx';
import { PartOneEarlyBaitSwitch } from './components/part1/PartOneEarlyBaitSwitch.tsx';
import { PartOneWordOrigin } from './components/part1/PartOneWordOrigin.tsx';
import { PartOneSpreadInternet } from './components/part1/PartOneSpreadInternet.tsx';
import { PartOneRealWorld } from './components/part1/PartOneRealWorld.tsx';
import { PartOneWhyItWorks } from './components/part1/PartOneWhyItWorks.tsx';
import { PartOneAfterlife } from './components/part1/PartOneAfterlife.tsx';

// Colophon & Sources
import { ColophonEnding } from './components/ColophonEnding.tsx';

import { content } from './content/longread.ru.ts';

export default function App() {
  const [audioMuted, setAudioMuted] = useState(false);

  useEffect(() => {
    applyTypographyConfig();
  }, []);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950 font-body">
      {/* Fixed Top Chapter Navigation */}
      <Navigation
        audioMuted={audioMuted}
        onToggleAudio={() => setAudioMuted((prev) => !prev)}
      />

      {/* Main Longread Story Stream */}
      <main>
        <section id="rickroll-story" aria-label={`${content.partOne.hero.kickerTopic}`}>
          {/* 0. Opening Hero: Archival Video & 1987 Synth Player */}
          <PartOneHero audioMuted={audioMuted} />

          {/* Section 1 — A Pop Song from 1987 */}
          <PartOnePopSong1987 />

          {/* Section 2 — Before Rickrolling Had a Name */}
          <PartOneEarlyBaitSwitch />

          {/* Section 3 — Where Did the Word “Rickrolling” Come From? */}
          <PartOneWordOrigin audioMuted={audioMuted} />

          {/* Section 4 — How the Prank Spread Across the Internet */}
          <PartOneSpreadInternet />

          {/* Section 5 — When the Internet Rickrolled the Real World */}
          <PartOneRealWorld />

          {/* Section 6 — Why Rickrolling Still Works */}
          <PartOneWhyItWorks />

          {/* Section 7 — The Afterlife of a Pop Song (1.6B Milestone) */}
          <PartOneAfterlife />
        </section>

        {/* Final Colophon & Digital Archaeology */}
        <ColophonEnding />
      </main>
    </div>
  );
}
