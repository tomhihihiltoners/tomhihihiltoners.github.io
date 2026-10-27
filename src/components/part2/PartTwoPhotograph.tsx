/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { mediaConfig } from '../../config/media.ts';
import { MediaImage } from '../MediaComponents.tsx';
import { BlissLandscape } from '../ArtworkVisuals.tsx';
import { MapPin, Maximize2, Layers, Info, Camera, Sparkles, User, FileText } from 'lucide-react';
import { playRetroClick } from '../../utils/audioSynth.ts';
import { content } from '../../content/longread.ru.ts';

export const PartTwoPhotograph: React.FC = () => {
  const [activeEra, setActiveEra] = useState<'1996' | 'today'>('1996');
  const [showGrid, setShowGrid] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const c = content.partTwo.photograph;

  return (
    <section
      id="part2-photo"
      className="py-24 px-6 lg:px-12 bg-stone-950 border-t border-stone-800 text-stone-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-800">
          <div>
            <div className="text-xs uppercase tracking-widest text-emerald-400 font-caption mb-3 font-semibold">
              {c.kicker}
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-stone-100 font-heading">
              {c.title}
            </h2>
          </div>
          <p className="text-sm text-stone-400 font-sans max-w-md">
            {c.lead}
          </p>
        </div>

        {/* 90% Visual Centerpiece: Interactive Landscape Comparison Viewer */}
        <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl">
          {/* Top Archival Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-3.5 bg-stone-950 border-b border-stone-800 text-xs font-caption text-stone-400">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-semibold">{c.archivalToolbarTag}</span>
            </div>

            {/* Interactive Modes */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-stone-900 rounded-lg p-0.5 border border-stone-800">
                <button
                  onClick={() => {
                    playRetroClick();
                    setActiveEra('1996');
                  }}
                  className={`px-3 py-1 rounded text-xs transition-colors ${
                    activeEra === '1996'
                      ? 'bg-emerald-600 text-white font-medium'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {c.buttonGrass1996}
                </button>
                <button
                  onClick={() => {
                    playRetroClick();
                    setActiveEra('today');
                  }}
                  className={`px-3 py-1 rounded text-xs transition-colors ${
                    activeEra === 'today'
                      ? 'bg-amber-700 text-white font-medium'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {c.buttonVineyardToday}
                </button>
              </div>

              <button
                onClick={() => {
                  playRetroClick();
                  setShowGrid(!showGrid);
                }}
                className={`p-1.5 rounded border transition-colors ${
                  showGrid
                    ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400'
                    : 'border-stone-800 bg-stone-900 text-stone-400 hover:text-stone-200'
                }`}
                title={c.tooltipGrid}
              >
                <Layers className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  playRetroClick();
                  setIsZoomed(!isZoomed);
                }}
                className={`p-1.5 rounded border transition-colors ${
                  isZoomed
                    ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400'
                    : 'border-stone-800 bg-stone-900 text-stone-400 hover:text-stone-200'
                }`}
                title={c.tooltipZoom}
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Photograph Viewer Canvas */}
          <div
            className={`relative w-full overflow-hidden transition-all duration-500 ${
              isZoomed ? 'aspect-[16/7] scale-105' : 'aspect-[16/9]'
            }`}
          >
            {activeEra === '1996' ? (
              <MediaImage
                src={mediaConfig.bliss.wallpaperHighRes}
                alt={c.altGrass}
                aspectRatioClass="w-full h-full"
                className="w-full h-full object-cover"
                fallbackComponent={
                  <BlissLandscape
                    mode="1996"
                    showGrid={showGrid}
                    className="w-full h-full object-cover"
                  />
                }
              />
            ) : (
              <MediaImage
                src={mediaConfig.bliss.sonomaVineyardToday}
                alt={c.altVineyard}
                aspectRatioClass="w-full h-full"
                className="w-full h-full object-cover"
                fallbackComponent={
                  <BlissLandscape
                    mode="today"
                    showGrid={showGrid}
                    className="w-full h-full object-cover"
                  />
                }
              />
            )}

            {/* Caption Overlay */}
            <div className="absolute bottom-4 left-6 z-20 pointer-events-none bg-stone-950/70 backdrop-blur-md px-3.5 py-2 rounded-lg border border-stone-800/80 text-xs text-stone-200 font-caption">
              <div>{c.captionAuthorDate}</div>
              <div className="text-stone-400 text-[11px]">{c.captionLocation}</div>
            </div>

            {/* Coordinates Card */}
            <div className="absolute bottom-4 right-6 z-20 bg-stone-950/80 backdrop-blur-md px-4 py-2.5 rounded-lg border border-stone-800 text-xs font-caption text-stone-300 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <div className="font-mono text-stone-100">{c.coordinatesValue}</div>
                <div className="text-[10px] text-stone-400">{c.coordinatesLabel}</div>
              </div>
            </div>
          </div>

          {/* Geographic Disclaimer & Technical Metadata Bar */}
          <div className="p-4 bg-stone-950/90 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-400 font-caption">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{c.coordinatesDisclaimer}</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-stone-400">
              <span>{c.techMedium}</span>
              <span>·</span>
              <span>{c.techUnedited}</span>
            </div>
          </div>
        </div>

        {/* 90% Visual Archival Strip: 3 Photographic Artifact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* Card 1: Charles O'Rear */}
          <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-900/60 shadow-xl flex flex-col justify-between group">
            <div className="relative aspect-video overflow-hidden bg-stone-950">
              <MediaImage
                src={mediaConfig.bliss.charlesOrearPortrait}
                alt="Charles O'Rear with film transparency"
                aspectRatioClass="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-stone-950/80 text-[11px] font-mono text-emerald-400 border border-stone-700">
                JANUARY 1996
              </div>
            </div>
            <div className="p-5 space-y-2 bg-stone-950">
              <h4 className="text-base font-heading font-semibold text-stone-100 flex items-center gap-2">
                <User className="w-4 h-4 text-emerald-400" />
                <span>{c.storyOneTitle}</span>
              </h4>
              <p className="text-xs text-stone-400 font-sans leading-relaxed">
                {c.storyOneParagraphs[0]}
              </p>
            </div>
          </div>

          {/* Card 2: Camera & Film Rig */}
          <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-900/60 shadow-xl flex flex-col justify-between group">
            <div className="relative aspect-video overflow-hidden bg-stone-950">
              <MediaImage
                src={mediaConfig.bliss.mamiyaCameraRig}
                alt="Mamiya RZ67 medium format camera"
                aspectRatioClass="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-stone-950/80 text-[11px] font-mono text-emerald-400 border border-stone-700">
                MAMIYA RZ67
              </div>
            </div>
            <div className="p-5 space-y-2 bg-stone-950">
              <h4 className="text-base font-heading font-semibold text-stone-100 flex items-center gap-2">
                <Camera className="w-4 h-4 text-emerald-400" />
                <span>Unedited Velvia Color</span>
              </h4>
              <p className="text-xs text-stone-400 font-sans leading-relaxed">
                {c.storyOneQuote}
              </p>
            </div>
          </div>

          {/* Card 3: Microsoft & Corbis Hand Delivery */}
          <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-900/60 shadow-xl flex flex-col justify-between group">
            <div className="relative aspect-video overflow-hidden bg-stone-950">
              <MediaImage
                src={mediaConfig.bliss.corbisBillGatesArchive}
                alt="Corbis archive acquisition"
                aspectRatioClass="w-full h-full"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-stone-950/80 text-[11px] font-mono text-emerald-400 border border-stone-700">
                CORBIS ARCHIVE
              </div>
            </div>
            <div className="p-5 space-y-2 bg-stone-950">
              <h4 className="text-base font-heading font-semibold text-stone-100 flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>{c.storyTwoTitle}</span>
              </h4>
              <p className="text-xs text-stone-400 font-sans leading-relaxed">
                {c.storyTwoParagraphs[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
