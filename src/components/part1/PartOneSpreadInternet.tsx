/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { content } from '../../content/longread.ru.ts';
import { mediaConfig } from '../../config/media.ts';
import { MediaGif } from '../MediaComponents.tsx';
import { Clock, TrendingUp, Sparkles, Youtube, Play, CheckCircle2 } from 'lucide-react';
import { playRetroClick, playRickrollSynthHook } from '../../utils/audioSynth.ts';

export const PartOneSpreadInternet: React.FC<{ audioMuted?: boolean }> = ({ audioMuted = false }) => {
  const [activeCue, setActiveCue] = useState<number>(0);
  const text = content.partOne.section4SpreadInternet;

  const handleCueClick = (index: number) => {
    playRetroClick();
    setActiveCue(index);
    if (!audioMuted) {
      playRickrollSynthHook(0.18);
    }
  };

  return (
    <section
      id="part1-section4"
      className="py-24 px-6 lg:px-12 bg-stone-950 border-t border-stone-800 text-stone-200"
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

        {/* 90% Visual Centerpiece: The 1.5-Second Recognition Player */}
        <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Media Canvas (Dance GIF loop) */}
            <div className="lg:col-span-7 relative aspect-video bg-black overflow-hidden flex items-center justify-center">
              <MediaGif
                src={mediaConfig.howRickrollingHappened.rickrollDanceGif}
                alt="Rick Astley recognizable dance loop"
                aspectRatioClass="w-full h-full"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md border border-stone-700 text-xs font-mono text-amber-400 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                <span>1.5-SECOND INSTANT RECOGNITION</span>
              </div>
            </div>

            {/* Interactive Recognition Formula Breakdown */}
            <div className="lg:col-span-5 p-6 lg:p-8 bg-stone-950 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-800 space-y-4">
              <div className="space-y-1">
                <div className="text-xs font-caption uppercase tracking-wider text-amber-400 font-semibold">
                  Audio-Visual Recognition Timeline
                </div>
                <h3 className="text-xl font-heading font-semibold text-stone-100">
                  Instant Cognitive Payoff
                </h3>
              </div>

              <div className="space-y-3">
                {text.recognitionCues.map((cue, idx) => {
                  const isSelected = activeCue === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleCueClick(idx)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer space-y-1 ${
                        isSelected
                          ? 'bg-stone-900 border-amber-500/80 ring-1 ring-amber-500/30'
                          : 'bg-stone-900/40 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-amber-400 font-bold">{cue.timestamp}</span>
                        <span className="text-stone-300 font-medium font-sans">{cue.cue}</span>
                      </div>
                      <p className="text-xs text-stone-400 font-sans leading-relaxed">
                        {cue.cognitiveEffect}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="text-[11px] text-stone-500 font-mono flex items-center gap-1.5 pt-2 border-t border-stone-900">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Click any cue to preview timing</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Spread Milestones Grid with Platform Badges */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-caption text-stone-400 font-semibold uppercase tracking-wider">
            <TrendingUp className="w-4 h-4 text-amber-500" />
            <span>Documented Viral Milestones</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {text.milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 hover:border-stone-700 transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-amber-400 font-bold text-xs">{m.date}</span>
                    <span className="px-2 py-0.5 rounded bg-stone-800 border border-stone-700 text-stone-300 font-mono text-[10px]">
                      {m.platform}
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 font-sans leading-relaxed">
                    {m.significance}
                  </p>
                </div>

                <div className="w-full h-1 bg-amber-500/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: `${(idx + 1) * 25}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
