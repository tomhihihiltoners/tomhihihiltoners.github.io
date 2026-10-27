/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, Sparkles, Check } from 'lucide-react';
import { content } from '../../content/longread.ru.ts';

export const PartOneAfterlife: React.FC = () => {
  const text = content.partOne.section7Afterlife;

  return (
    <section
      id="part1-section7"
      className="py-24 px-6 lg:px-12 bg-stone-900 border-t border-stone-800 text-stone-200"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-caption font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{text.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-stone-100 font-heading">
            {text.title}
          </h2>
          <p className="text-sm text-stone-400 font-sans max-w-xl mx-auto">
            {text.lead}
          </p>
          <div className="w-16 h-px bg-amber-500/60 mx-auto mt-4" />
        </div>

        {/* 90% Visual Feature: 1.6 Billion Views Visual Card */}
        <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-stone-950 shadow-2xl p-8 sm:p-12 text-center space-y-6 relative">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
              YOUTUBE MILESTONE
            </div>
            <div className="text-5xl sm:text-7xl font-mono font-bold text-white tracking-tight">
              1,600,000,000+
            </div>
            <div className="text-sm text-stone-400 font-sans">
              Global views across YouTube and cultural platforms
            </div>
          </div>

          <div className="max-w-2xl mx-auto pt-6 border-t border-stone-800/80">
            <blockquote className="text-lg sm:text-xl font-heading italic text-stone-200 leading-snug">
              {text.quote}
            </blockquote>
            <span className="text-xs font-mono text-amber-400 block tracking-wider mt-3">
              {text.quoteAuthor}
            </span>
          </div>
        </div>

        {/* Distinctive Visual End Marker Leading to Colophon */}
        <div className="p-6 rounded-xl bg-amber-950/20 border border-amber-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center shrink-0">
              <Check className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-semibold text-stone-100 font-sans">
                {text.cardHeading}
              </div>
              <div className="text-xs text-stone-400 font-caption">
                {text.cardSubtext}
              </div>
            </div>
          </div>

          <a
            href="#colophon"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-medium text-xs font-sans rounded-lg transition-colors shadow"
          >
            <span>{text.proceedButton}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
