/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { mediaConfig } from '../../config/media.ts';
import { MediaImage } from '../MediaComponents.tsx';
import { Film, Image as ImageIcon, Sparkles, ArrowRight, Check } from 'lucide-react';
import { playRetroClick } from '../../utils/audioSynth.ts';
import { content } from '../../content/longread.ru.ts';

export const PartTwoConclusion: React.FC = () => {
  const [activeRowIndex, setActiveRowIndex] = useState(2);
  const c = content.partTwo.conclusion;
  const p1 = c.summaryPartOne;
  const p2 = c.summaryPartTwo;

  return (
    <section
      id="part2-synthesis"
      className="py-24 px-6 lg:px-12 bg-stone-950 border-t border-stone-800 text-stone-200"
    >
      <div className="max-w-7xl mx-auto space-y-16">
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

        {/* Central Connecting Statement */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-amber-950/30 via-stone-900 to-sky-950/30 border border-stone-800 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-caption uppercase tracking-wider text-stone-400">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>{c.unifyingLawBadge}</span>
          </div>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-heading font-medium text-stone-100 leading-snug max-w-4xl mx-auto">
            {c.unifyingQuote}
          </blockquote>
          <p className="text-xs sm:text-sm text-stone-400 font-sans max-w-2xl mx-auto pt-2">
            {c.unifyingSubQuote}
          </p>
        </div>

        {/* Two-Column Contrast Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Column A: Part I Review (Never Gonna Give You Up) */}
          <div className="p-8 rounded-2xl bg-stone-900/60 border border-stone-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Film className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-caption uppercase tracking-wider text-amber-400 font-semibold">
                    {p1.badge}
                  </span>
                </div>
                <span className="text-xs font-mono text-stone-400">{p1.year}</span>
              </div>

              {/* Media Thumbnail */}
              <div className="rounded-xl overflow-hidden border border-stone-800 aspect-video">
                <MediaImage
                  src={mediaConfig.twoProjects.rickAstleyCompareStill}
                  alt={p1.alt}
                  aspectRatioClass="aspect-video"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-medium text-stone-100">
                {p1.title}
              </h3>

              <div className="space-y-3 pt-2 text-sm text-stone-300 font-sans">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-stone-400 uppercase w-24 shrink-0 pt-0.5">{p1.formatLabel}</span>
                  <span className="text-stone-200">{p1.formatValue}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-stone-400 uppercase w-24 shrink-0 pt-0.5">{p1.engineLabel}</span>
                  <span className="text-stone-200">{p1.engineValue}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-stone-400 uppercase w-24 shrink-0 pt-0.5">{p1.mechanismLabel}</span>
                  <span className="text-stone-200">{p1.mechanismValue}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-stone-400 uppercase w-24 shrink-0 pt-0.5">{p1.newRoleLabel}</span>
                  <span className="text-stone-200">{p1.newRoleValue}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-400 font-body italic leading-relaxed">
              {p1.pullQuote}
            </div>
          </div>

          {/* Column B: Part II Summary (Bliss) */}
          <div className="p-8 rounded-2xl bg-stone-900/60 border border-stone-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <ImageIcon className="w-5 h-5 text-sky-400" />
                  <span className="text-xs font-caption uppercase tracking-wider text-sky-400 font-semibold">
                    {p2.badge}
                  </span>
                </div>
                <span className="text-xs font-mono text-stone-400">{p2.year}</span>
              </div>

              {/* Media Thumbnail */}
              <div className="rounded-xl overflow-hidden border border-stone-800 aspect-video">
                <MediaImage
                  src={mediaConfig.twoProjects.blissCompareLandscape}
                  alt={p2.alt}
                  aspectRatioClass="aspect-video"
                />
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-medium text-stone-100">
                {p2.title}
              </h3>

              <div className="space-y-3 pt-2 text-sm text-stone-300 font-sans">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-stone-400 uppercase w-24 shrink-0 pt-0.5">{p2.formatLabel}</span>
                  <span className="text-stone-200">{p2.formatValue}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-stone-400 uppercase w-24 shrink-0 pt-0.5">{p2.engineLabel}</span>
                  <span className="text-stone-200">{p2.engineValue}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-stone-400 uppercase w-24 shrink-0 pt-0.5">{p2.mechanismLabel}</span>
                  <span className="text-stone-200">{p2.mechanismValue}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono text-stone-400 uppercase w-24 shrink-0 pt-0.5">{p2.newRoleLabel}</span>
                  <span className="text-stone-200">{p2.newRoleValue}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-400 font-body italic leading-relaxed">
              {p2.pullQuote}
            </div>
          </div>
        </div>

        {/* Minimalist Infographic Comparison Matrix */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-caption uppercase tracking-wider text-stone-400">
              {c.matrixPrompt}
            </span>
            <span className="text-xs font-mono text-stone-400">
              {c.matrixCount}
            </span>
          </div>

          <div className="divide-y divide-stone-800 rounded-xl border border-stone-800 bg-stone-900/40 overflow-hidden">
            {c.matrixRows.map((item, idx) => {
              const isSelected = activeRowIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    playRetroClick();
                    setActiveRowIndex(idx);
                  }}
                  className={`p-5 transition-colors cursor-pointer ${
                    isSelected ? 'bg-stone-900' : 'hover:bg-stone-900/50'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-sm font-semibold text-stone-200 font-sans flex items-center gap-2">
                      <span className="text-xs font-mono text-amber-500 font-bold">0{idx + 1}.</span>
                      <span>{item.dimension}</span>
                    </h4>
                    <span className="text-xs font-caption text-stone-400 flex items-center gap-1">
                      <span>{c.matrixLabelExplore}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-stone-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans animate-fade-in">
                      <div className="p-3 rounded bg-amber-950/20 border border-amber-900/40">
                        <span className="font-semibold text-amber-400 block mb-1">{p1.title}</span>
                        <p className="text-stone-300 leading-relaxed">{item.rickAstley}</p>
                      </div>
                      <div className="p-3 rounded bg-sky-950/20 border border-sky-900/40">
                        <span className="font-semibold text-sky-400 block mb-1">{p2.title}</span>
                        <p className="text-stone-300 leading-relaxed">{item.bliss}</p>
                      </div>
                      <div className="p-3 rounded bg-stone-950 border border-stone-800">
                        <span className="font-semibold text-emerald-400 block mb-1">{c.matrixSynthesisLabel}</span>
                        <p className="text-stone-300 leading-relaxed font-body">{item.synthesis}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Distinctive Visual End of Part II Marker */}
        <div className="p-6 rounded-xl bg-emerald-950/20 border border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-sm font-semibold text-stone-100 font-sans">
                {c.cardHeading}
              </div>
              <div className="text-xs text-stone-400 font-caption">
                {c.cardSubtext}
              </div>
            </div>
          </div>

          <a
            href="#colophon"
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs font-sans rounded-lg transition-colors shadow"
          >
            <span>{c.buttonViewColophon}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
