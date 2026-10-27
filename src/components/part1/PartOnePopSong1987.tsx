/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { mediaConfig } from '../../config/media.ts';
import { MediaImage } from '../MediaComponents.tsx';
import { RickAstleyStill } from '../ArtworkVisuals.tsx';
import { Disc, Film, Eye, Sparkles, Music } from 'lucide-react';
import { playRetroClick } from '../../utils/audioSynth.ts';
import { content } from '../../content/longread.ru.ts';

export const PartOnePopSong1987: React.FC = () => {
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'videoStill' | 'singleCover' | 'studio'>('videoStill');

  const text = content.partOne.section1PopSong;

  return (
    <section
      id="part1-section1"
      className="py-20 px-6 lg:px-12 bg-stone-900 border-t border-stone-800 text-stone-200"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header: Minimal & Punchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-800">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-500 font-caption mb-2 font-semibold">
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

        {/* 90% Visual Main Stage: Full-Width Archival Media Gallery */}
        <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 shadow-2xl">
          {/* Top Visual Mode Selector */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 bg-stone-950 border-b border-stone-800 text-xs font-caption text-stone-400">
            <span className="flex items-center gap-1.5 text-stone-300 font-medium">
              <Film className="w-4 h-4 text-amber-500" />
              <span>1987 Archival Visuals</span>
            </span>

            <div className="flex items-center gap-1.5 bg-stone-900 p-1 rounded-lg border border-stone-800">
              <button
                onClick={() => {
                  playRetroClick();
                  setViewMode('videoStill');
                }}
                className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                  viewMode === 'videoStill'
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 font-medium'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>{text.buttonViewShoot}</span>
              </button>

              <button
                onClick={() => {
                  playRetroClick();
                  setViewMode('singleCover');
                }}
                className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                  viewMode === 'singleCover'
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 font-medium'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Disc className="w-3.5 h-3.5" />
                <span>{text.buttonViewSleeve}</span>
              </button>

              <button
                onClick={() => {
                  playRetroClick();
                  setViewMode('studio');
                }}
                className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                  viewMode === 'studio'
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40 font-medium'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Music className="w-3.5 h-3.5" />
                <span>PWL Studio Session</span>
              </button>
            </div>
          </div>

          {/* High-Resolution Media Canvas */}
          <div className="relative aspect-video sm:aspect-[21/9] w-full bg-stone-950 overflow-hidden">
            {viewMode === 'videoStill' && (
              <MediaImage
                src={mediaConfig.beforeTheInternet.trenchCoatStill}
                alt={text.altStill}
                aspectRatioClass="w-full h-full"
                className="w-full h-full object-cover"
                fallbackComponent={
                  <RickAstleyStill showScanlines={true} className="w-full h-full" />
                }
              />
            )}

            {viewMode === 'singleCover' && (
              <div className="w-full h-full flex items-center justify-center bg-stone-950 p-4">
                <img
                  src={mediaConfig.beforeTheInternet.singleCover}
                  alt={text.altSleeve}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl border border-stone-800"
                />
              </div>
            )}

            {viewMode === 'studio' && (
              <MediaImage
                src={mediaConfig.beforeTheInternet.studioSession}
                alt="PWL Studios recording session"
                aspectRatioClass="w-full h-full"
                className="w-full h-full object-cover"
              />
            )}

            {/* Subtle Overlay Caption */}
            <div className="absolute bottom-3 left-4 z-20 bg-stone-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-stone-800 text-xs text-stone-300 font-caption">
              {text.paragraphs[0]}
            </div>
          </div>

          {/* Bottom Bar: Quick Production Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-stone-800 bg-stone-950 border-t border-stone-800">
            <div className="p-3.5 flex items-center gap-3">
              <Disc className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-xs font-semibold text-stone-200 block font-sans">{text.card1Title}</span>
                <span className="text-[11px] text-stone-400 font-sans">{text.card1Text}</span>
              </div>
            </div>

            <div className="p-3.5 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-xs font-semibold text-stone-200 block font-sans">{text.card2Title}</span>
                <span className="text-[11px] text-stone-400 font-sans">{text.card2Text}</span>
              </div>
            </div>

            <div className="p-3.5 flex items-center gap-3">
              <Film className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="text-xs font-semibold text-stone-200 block font-sans">{text.card3Title}</span>
                <span className="text-[11px] text-stone-400 font-sans">{text.card3Text}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Timeline Strip with Year Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {text.timelineEvents.map((event, idx) => (
            <button
              key={idx}
              onClick={() => {
                playRetroClick();
                setActiveEventIndex(idx);
              }}
              className={`p-3 rounded-xl text-left transition-all border ${
                activeEventIndex === idx
                  ? 'border-amber-500 bg-amber-500/10 text-amber-400 shadow-md ring-1 ring-amber-500/30'
                  : 'border-stone-800 bg-stone-950/60 text-stone-400 hover:text-stone-200 hover:border-stone-700'
              }`}
            >
              <div className="text-xs font-mono font-bold text-amber-400">{event.time}</div>
              <div className="text-xs font-semibold text-stone-200 font-sans mt-0.5">{event.title}</div>
              <div className="text-[11px] text-stone-400 font-sans truncate mt-0.5">{event.detail}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
