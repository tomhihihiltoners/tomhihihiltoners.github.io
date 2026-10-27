/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { mediaConfig } from '../../config/media.ts';
import { MediaImage } from '../MediaComponents.tsx';
import { content } from '../../content/longread.ru.ts';
import { Tv, Megaphone, Trophy, Radio, MapPin, Users, Sparkles, ExternalLink } from 'lucide-react';
import { playRetroClick } from '../../utils/audioSynth.ts';

export const PartOneRealWorld: React.FC = () => {
  const [activeEventId, setActiveEventId] = useState<string>('macys');
  const text = content.partOne.section5RealWorld;

  const eventImageMap: Record<string, string> = {
    chanology: mediaConfig.realWorldPranks.projectChanology,
    mets: mediaConfig.realWorldPranks.metsStadium,
    macys: mediaConfig.realWorldPranks.macysParade,
    mtv: mediaConfig.realWorldPranks.mtvAwards,
  };

  return (
    <section
      id="part1-section5"
      className="py-24 px-6 lg:px-12 bg-stone-900 border-t border-stone-800 text-stone-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-800">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-500 font-caption mb-3 font-semibold">
              {text.kicker}
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-stone-100 font-heading">
              {text.title}
            </h2>
          </div>
          <p className="text-sm text-stone-400 font-sans max-w-md">
            {text.lead}
          </p>
        </div>

        {/* 90% Visual Showcase: 4 Photographic Exhibit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {text.events.map((ev) => {
            const isSelected = activeEventId === ev.id;
            const photoSrc = eventImageMap[ev.id] || mediaConfig.hero.heroImage;

            return (
              <div
                key={ev.id}
                onClick={() => {
                  playRetroClick();
                  setActiveEventId(ev.id);
                }}
                className={`group rounded-2xl overflow-hidden border transition-all cursor-pointer flex flex-col justify-between shadow-xl ${
                  isSelected
                    ? 'border-amber-500/80 bg-stone-950 ring-1 ring-amber-500/30'
                    : 'border-stone-800 bg-stone-950/60 hover:border-stone-700 hover:bg-stone-950'
                }`}
              >
                {/* Visual Photographic Banner */}
                <div className="relative aspect-video overflow-hidden bg-stone-900">
                  <MediaImage
                    src={photoSrc}
                    alt={ev.eventTitle}
                    aspectRatioClass="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />

                  {/* Date & Location Badges */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md border border-stone-700 text-xs font-mono text-amber-400 font-bold">
                      {ev.date}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-stone-950/80 backdrop-blur-md border border-stone-800 text-[11px] font-sans text-stone-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-400" />
                      <span>{ev.location}</span>
                    </span>
                  </div>

                  {/* Bottom Image Overlay Title */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="flex items-center gap-2 mb-1">
                      {ev.id === 'chanology' && <Megaphone className="w-4 h-4 text-amber-400" />}
                      {ev.id === 'mets' && <Radio className="w-4 h-4 text-amber-400" />}
                      {ev.id === 'macys' && <Tv className="w-4 h-4 text-amber-400" />}
                      {ev.id === 'mtv' && <Trophy className="w-4 h-4 text-amber-400" />}
                      <span className="text-xs text-amber-400/90 font-mono font-medium">
                        {ev.participants}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-white drop-shadow">
                      {ev.eventTitle}
                    </h3>
                  </div>
                </div>

                {/* 1-Sentence Caption & Meaning */}
                <div className="p-6 space-y-3 bg-stone-950">
                  <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                    {ev.whatHappened}
                  </p>

                  <div className="p-3 rounded-lg bg-stone-900 border border-stone-800/80 flex items-center justify-between text-xs text-stone-400 font-sans">
                    <span className="text-amber-400/90 font-medium">
                      {ev.culturalMeaning}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
