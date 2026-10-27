/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { content } from '../../content/longread.ru.ts';
import { Link2, ShieldAlert, Laugh, AlertTriangle, Compass, MousePointer } from 'lucide-react';
import { playRetroClick } from '../../utils/audioSynth.ts';

export const PartOneEarlyBaitSwitch: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const text = content.partOne.section2EarlyBaitSwitch;

  return (
    <section
      id="part1-section2"
      className="py-20 px-6 lg:px-12 bg-stone-950 border-t border-stone-800 text-stone-200"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
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

        {/* 90% Visual: Retro Web Browser Simulator */}
        <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl">
          {/* Classic Browser Titlebar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-stone-950 border-b border-stone-800 text-xs font-mono text-stone-400 select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-stone-300 ml-2 font-sans text-xs">Early Web Browser (c. 1999–2006)</span>
            </div>
            <span className="text-[11px] text-stone-500 font-mono">HTML Anchor Tag Architecture</span>
          </div>

          {/* Browser Address Bar */}
          <div className="px-4 py-2 bg-stone-900 border-b border-stone-800 flex items-center gap-2 text-xs font-mono text-stone-400">
            <span className="text-stone-500 text-[11px]">Address:</span>
            <span className="px-2.5 py-1 rounded bg-stone-950 text-stone-300 flex-1 truncate border border-stone-800 text-[11px]">
              http://boards.earlyweb.org/general/thread_4982.html
            </span>
          </div>

          {/* Browser Content Area: Interactive Bait Link */}
          <div className="p-8 sm:p-12 bg-stone-950 text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-stone-500 font-mono mb-2">
              <MousePointer className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Hover cursor over the disguised link to inspect target payload</span>
            </div>

            <div
              onMouseEnter={() => {
                playRetroClick();
                setIsHovered(true);
              }}
              onMouseLeave={() => setIsHovered(false)}
              className="inline-block p-4 sm:p-6 rounded-xl border border-dashed border-stone-700 bg-stone-900/60 hover:border-amber-500/80 hover:bg-amber-500/5 transition-all cursor-pointer"
            >
              <span className="text-lg sm:text-2xl font-serif text-blue-400 underline decoration-blue-500/60 hover:text-blue-300">
                Exclusive_GTA4_Leak_HQ_Mirror.mov
              </span>
              <span className="block text-xs font-mono text-stone-500 mt-2">
                [Visible hyperlink text masks the destination URL]
              </span>
            </div>

            <p className="text-xs text-stone-400 font-caption max-w-lg mx-auto">
              {text.paragraphs[0]}
            </p>
          </div>

          {/* Browser Status Bar (Dynamic on Hover) */}
          <div className="px-4 py-2.5 bg-stone-950 border-t border-stone-800 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 truncate">
              <Compass className={`w-3.5 h-3.5 ${isHovered ? 'text-amber-400 animate-spin' : 'text-stone-500'}`} />
              <span className="text-stone-500 text-[11px]">Status:</span>
              <span className={isHovered ? 'text-amber-400 font-bold truncate' : 'text-stone-500'}>
                {isHovered ? text.statusBarUrl : 'Ready (Awaiting user interaction)'}
              </span>
            </div>
            <span className="text-[10px] text-stone-500 hidden sm:inline font-sans">
              {text.statusBarNote}
            </span>
          </div>
        </div>

        {/* 3 Visual Taxonomy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {text.comparisonCards.map((card, idx) => {
            const isBenign = idx === 1;
            return (
              <div
                key={idx}
                className={`p-5 rounded-xl border transition-all ${
                  isBenign
                    ? 'bg-amber-950/20 border-amber-800/80 shadow-lg ring-1 ring-amber-500/30'
                    : 'bg-stone-900/40 border-stone-800/80'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  {idx === 0 && <AlertTriangle className="w-4 h-4 text-rose-400" />}
                  {idx === 1 && <Laugh className="w-4 h-4 text-amber-400" />}
                  {idx === 2 && <ShieldAlert className="w-4 h-4 text-stone-400" />}
                  <h4 className={`text-xs font-semibold font-sans uppercase tracking-wider ${
                    isBenign ? 'text-amber-400' : 'text-stone-200'
                  }`}>
                    {card.category}
                  </h4>
                </div>

                <div className="text-xs text-stone-300 font-sans space-y-1">
                  <div>
                    <span className="text-stone-500 text-[11px]">Intent: </span>
                    {card.intent}
                  </div>
                  <div>
                    <span className="text-stone-500 text-[11px]">Response: </span>
                    {card.userReaction}
                  </div>
                </div>

                <div className="text-[11px] text-stone-500 font-caption border-t border-stone-800/80 pt-2 mt-2">
                  {card.legacy}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
