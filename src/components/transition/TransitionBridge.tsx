/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { mediaConfig } from '../../config/media.ts';
import { MediaImage } from '../MediaComponents.tsx';
import { BlissLandscape } from '../ArtworkVisuals.tsx';
import { Sun, Radio, Wind, ArrowRight } from 'lucide-react';

export const TransitionBridge: React.FC = () => {
  const [dissolveValue, setDissolveValue] = useState(60);

  return (
    <section
      id="transition"
      className="relative min-h-[90vh] py-32 px-6 lg:px-12 bg-gradient-to-b from-stone-950 via-stone-900 to-sky-950/80 text-stone-100 overflow-hidden flex flex-col justify-center border-y-2 border-stone-800"
    >
      {/* Background Dissolve Container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Analog CRT static & dark warehouse of Part I */}
        <div
          className="absolute inset-0 bg-stone-950 transition-opacity duration-300"
          style={{ opacity: 1 - dissolveValue / 100 }}
        >
          <MediaImage
            src={mediaConfig.transition.analogNoiseOverlay}
            alt="Analog noise overlay"
            aspectRatioClass="w-full h-full"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="scanlines absolute inset-0 opacity-40" />
          <div className="vhs-noise-bar opacity-30" />
        </div>

        {/* Layer 2: Pristine Open Blue Sky of Part II */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{ opacity: dissolveValue / 100 }}
        >
          <MediaImage
            src={mediaConfig.transition.californiaHorizonSky}
            alt="Pristine California open sky"
            aspectRatioClass="w-full h-full"
            className="w-full h-full object-cover opacity-50 scale-110"
            fallbackComponent={
              <BlissLandscape mode="1996" className="w-full h-full scale-110 opacity-70" />
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center space-y-10">
        {/* Transitional Curatorial Marker */}
        <div className="inline-flex items-center gap-2 text-xs font-caption uppercase tracking-widest text-sky-400 font-semibold px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-800/80">
          <Wind className="w-3.5 h-3.5" />
          <span>Interlude · From Sound & Kinetic Humor to Silent Landscape</span>
        </div>

        {/* Core Contrast Statement */}
        <div className="space-y-6">
          <div className="text-xs uppercase tracking-widest text-stone-400 font-caption">
            Part I Ended · Part II Beginning
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight font-heading leading-tight max-w-4xl mx-auto text-stone-100">
            One object needed the internet, hyperlinks, and millions of jokes to become immortal.
          </h2>

          <div className="w-20 h-px bg-gradient-to-r from-amber-400 via-sky-400 to-emerald-400 mx-auto my-6" />

          <p className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight font-heading leading-tight text-sky-200/95 max-w-4xl mx-auto italic">
            Another needed only a single quiet image that happened to appear on a computer screen.
          </p>
        </div>

        {/* Short Atmospheric Commentary */}
        <p className="text-base sm:text-lg text-stone-300 font-body max-w-2xl mx-auto leading-relaxed pt-2">
          Where our first story was loud, fast, and driven by human mischief, our second story unfolded
          in ambient silence. No prank was played, no links were disguised. Immortality arrived through the quiet
          repetition of everyday technology.
        </p>

        {/* Interactive Atmosphere Fader */}
        <div className="pt-4 max-w-md mx-auto">
          <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800/80 backdrop-blur-sm space-y-3">
            <div className="flex items-center justify-between text-xs font-caption text-stone-400">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Radio className="w-3 h-3" />
                <span>Part I: Analog CRT</span>
              </span>
              <span className="flex items-center gap-1.5 text-sky-400">
                <Sun className="w-3 h-3" />
                <span>Part II: Horizon Sky</span>
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={dissolveValue}
              onChange={(e) => {
                setDissolveValue(Number(e.target.value));
              }}
              className="w-full accent-sky-400 cursor-pointer h-1.5 bg-stone-800 rounded-lg appearance-none"
              aria-label="Dissolve transition slider from analog video to pastoral photograph"
            />

            <div className="flex items-center justify-between text-xs font-caption text-stone-400">
              <span>Drag to crossfade tone</span>
              <span className="font-mono text-sky-300">{dissolveValue}% Towards Part II</span>
            </div>
          </div>
        </div>

        {/* Distinctive Prompt to enter Part II */}
        <div className="pt-4">
          <a
            href="#part2-hero"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-stone-950 font-semibold text-xs font-sans rounded-xl transition-all shadow-lg shadow-sky-950/40"
          >
            <span>Begin Part II: The Bliss Photograph</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
