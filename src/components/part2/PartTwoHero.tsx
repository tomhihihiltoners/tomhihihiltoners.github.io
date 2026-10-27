/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { mediaConfig } from '../../config/media.ts';
import { MediaImage } from '../MediaComponents.tsx';
import { BlissLandscape } from '../ArtworkVisuals.tsx';
import { ChevronDown, MapPin } from 'lucide-react';
import { content } from '../../content/longread.ru.ts';

export const PartTwoHero: React.FC = () => {
  const c = content.partTwo.hero;

  return (
    <section
      id="part2-hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 lg:px-12 bg-stone-950 overflow-hidden"
    >
      {/* Background Visual Layer: Bliss High-Res Photograph */}
      <div className="absolute inset-0 z-0">
        <MediaImage
          src={mediaConfig.bliss.wallpaperHighRes}
          alt={c.mediaAlt}
          aspectRatioClass="h-full w-full"
          className="w-full h-full object-cover opacity-75 scale-105"
          fallbackComponent={
            <BlissLandscape mode="1996" className="w-full h-full object-cover opacity-80" />
          }
        />
        {/* Scrims for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/50 to-transparent pointer-events-none" />
      </div>

      {/* Top Meta Kicker */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 flex items-center justify-between text-xs text-stone-400 font-caption tracking-wider">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-bold">{c.kickerPart}</span>
          <span aria-hidden="true">·</span>
          <span>{c.kickerTopic}</span>
          <span aria-hidden="true">·</span>
          <span>{c.kickerYear}</span>
        </div>
        <div className="flex items-center gap-2 text-stone-400">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>{c.locationTag}</span>
        </div>
      </div>

      {/* Main Title & Deck */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-emerald-400 font-caption mb-3 font-semibold">
            {c.subKicker}
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-100 uppercase font-heading leading-none mb-6">
            {c.title}
          </h1>

          <p className="text-lg sm:text-xl text-stone-200 leading-relaxed font-body max-w-2xl mb-8">
            {c.subtitle}
          </p>

          <div className="flex items-center gap-3 text-xs text-stone-300 font-caption flex-wrap">
            <span className="px-3 py-1 rounded-md bg-stone-900/80 border border-stone-800 text-emerald-400">
              {c.tagPhotographer}
            </span>
            <span className="px-3 py-1 rounded-md bg-stone-900/80 border border-stone-800">
              {c.tagFilm}
            </span>
            <span className="px-3 py-1 rounded-md bg-stone-900/80 border border-stone-800">
              {c.tagReach}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Archival Caption & Scroll Affordance */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-stone-800/60 text-xs text-stone-400 font-caption">
        <div>
          <span>{c.captionCredits}</span>
          <span className="mx-2" aria-hidden="true">·</span>
          <span>{c.captionRoad}</span>
          <span className="mx-2" aria-hidden="true">·</span>
          <span>{c.captionFormat}</span>
        </div>

        <a
          href="#part2-photo"
          className="flex items-center gap-1.5 text-stone-400 hover:text-emerald-400 transition-colors"
        >
          <span>{c.scrollPrompt}</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
