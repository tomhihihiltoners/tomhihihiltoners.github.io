/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { mediaConfig } from '../../config/media.ts';
import { MediaImage, GoogleDriveVideo } from '../MediaComponents.tsx';
import { RickAstleyStill } from '../ArtworkVisuals.tsx';
import { ChevronDown, Tv, Play, Square, Video, Image as ImageIcon } from 'lucide-react';
import { playRickrollSynthHook, playRetroClick } from '../../utils/audioSynth.ts';
import { content } from '../../content/longread.ru.ts';

interface PartOneHeroProps {
  audioMuted: boolean;
}

export const PartOneHero: React.FC<PartOneHeroProps> = ({ audioMuted }) => {
  const [isPlayingSynth, setIsPlayingSynth] = useState(false);
  const [stopSynthFn, setStopSynthFn] = useState<(() => void) | null>(null);
  const [vhsMode, setVhsMode] = useState(true);
  const [showDriveVideo, setShowDriveVideo] = useState(false);

  const heroText = content.partOne.hero;

  const handleToggleSynth = () => {
    playRetroClick();
    if (isPlayingSynth && stopSynthFn) {
      stopSynthFn();
      setIsPlayingSynth(false);
      setStopSynthFn(null);
    } else {
      const stop = playRickrollSynthHook(audioMuted ? 0 : 0.22);
      setIsPlayingSynth(true);
      setStopSynthFn(() => stop);
      setTimeout(() => {
        setIsPlayingSynth(false);
        setStopSynthFn(null);
      }, 2600);
    }
  };

  return (
    <section
      id="part1-hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 px-6 lg:px-12 bg-stone-950 overflow-hidden"
    >
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0">
        <MediaImage
          src={mediaConfig.hero.heroImage}
          alt={heroText.mediaAlt}
          aspectRatioClass="h-full w-full"
          className="w-full h-full object-cover opacity-60 scale-105"
          fallbackComponent={
            <RickAstleyStill
              showScanlines={vhsMode}
              isDancing={isPlayingSynth}
              className="w-full h-full opacity-65 scale-105"
            />
          }
        />
        {/* Measured scrims for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-transparent pointer-events-none" />
      </div>

      {/* Top Meta Kicker */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 flex items-center justify-between text-xs text-stone-400 font-caption tracking-wider">
        <div className="flex items-center gap-2">
          <span className="text-amber-400 font-bold">{heroText.kickerPart}</span>
          <span aria-hidden="true">·</span>
          <span>{heroText.kickerTopic}</span>
          <span aria-hidden="true">·</span>
          <span>{heroText.kickerYear}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              playRetroClick();
              setShowDriveVideo(!showDriveVideo);
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-900/80 border border-stone-800 text-stone-300 hover:text-white transition-colors"
            title={showDriveVideo ? heroText.videoToggleStill : heroText.videoToggleWatch}
          >
            {showDriveVideo ? <ImageIcon className="w-3.5 h-3.5 text-amber-500" /> : <Video className="w-3.5 h-3.5 text-amber-500" />}
            <span>{showDriveVideo ? heroText.videoToggleStill : heroText.videoToggleWatch}</span>
          </button>

          <button
            onClick={() => {
              playRetroClick();
              setVhsMode(!vhsMode);
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-stone-900/80 border border-stone-800 text-stone-400 hover:text-stone-200 transition-colors"
            title={vhsMode ? heroText.vhsToggleOff : heroText.vhsToggleOn}
          >
            <Tv className="w-3.5 h-3.5 text-amber-500" />
            <span>{vhsMode ? heroText.vhsToggleOn : heroText.vhsToggleOff}</span>
          </button>
        </div>
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        {showDriveVideo ? (
          <div className="max-w-3xl mb-8 animate-fade-in">
            <GoogleDriveVideo
              src={mediaConfig.hero.videoEmbed}
              title={heroText.videoTitle}
              aspectRatioClass="aspect-video"
            />
          </div>
        ) : null}

        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-amber-500 font-caption mb-3 font-semibold">
            {heroText.kickerPart} · Opening Narrative
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-100 uppercase font-heading leading-none mb-6">
            {heroText.title}
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 leading-relaxed font-body max-w-2xl mb-8">
            {heroText.subtitle}
          </p>

          {/* Interactive Audio Synth Hook Affordance */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={handleToggleSynth}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-xs font-sans rounded-lg transition-colors shadow-lg shadow-amber-950/30"
              aria-label={isPlayingSynth ? heroText.synthButtonStop : heroText.synthButtonPlay}
            >
              {isPlayingSynth ? (
                <>
                  <Square className="w-4 h-4 fill-current" />
                  <span>{heroText.synthButtonStop}</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current" />
                  <span>{heroText.synthButtonPlay}</span>
                </>
              )}
            </button>

            <span className="text-xs text-stone-400 font-caption">
              {heroText.synthNote}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Archival Caption & Scroll Affordance */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-stone-800/60 text-xs text-stone-400 font-caption">
        <div>
          <span>{heroText.captionArtist}</span>
          <span className="mx-2" aria-hidden="true">·</span>
          <span>{heroText.captionStudio}</span>
          <span className="mx-2" aria-hidden="true">·</span>
          <span>{heroText.captionProduction}</span>
        </div>

        <a
          href="#part1-section1"
          className="flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors"
        >
          <span>{heroText.scrollPrompt}</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>

      {/* VHS Scanline Overlay */}
      {vhsMode && (
        <>
          <div className="scanlines absolute inset-0 z-10 pointer-events-none" />
          <div className="vhs-noise-bar z-10 pointer-events-none" />
        </>
      )}
    </section>
  );
};
