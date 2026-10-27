/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Sparkles, Code2 } from 'lucide-react';
import { content } from '../content/longread.ru.ts';

export const ColophonEnding: React.FC = () => {
  const c = content.colophon;

  return (
    <footer
      id="colophon"
      className="py-28 px-6 lg:px-12 bg-stone-950 border-t border-stone-800 text-stone-200"
    >
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Reflective Calm Closing Quote */}
        <div className="text-center space-y-6 pt-4">
          <div className="w-12 h-px bg-amber-400 mx-auto" />
          <blockquote className="text-2xl sm:text-4xl font-heading font-medium text-stone-100 leading-relaxed italic max-w-3xl mx-auto">
            {c.closingQuote}
          </blockquote>
          <div className="w-12 h-px bg-amber-400 mx-auto" />
        </div>

        {/* Curatorial Colophon & Sources */}
        <div className="space-y-8 pt-12 border-t border-stone-800/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-caption uppercase tracking-wider text-amber-500">
              <BookOpen className="w-4 h-4" />
              <span>{c.sourcesTitle}</span>
            </div>
            <span className="text-xs font-mono text-stone-400">{c.sourcesSubtitle}</span>
          </div>

          <div className="space-y-4">
            {c.citations.map((cite) => (
              <div
                key={cite.id}
                className="p-5 rounded-xl bg-stone-900/40 border border-stone-800/80 space-y-1.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <span className="font-semibold text-stone-200 font-sans">{cite.title}</span>
                  <span className="font-mono text-amber-400/90">{cite.authorOrSource} ({cite.year})</span>
                </div>
                <p className="text-xs text-stone-400 font-body leading-relaxed">
                  {cite.annotation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Code Customization Developer Note (Clean documentation for typography & media) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 flex items-start gap-3.5">
            <Code2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs">
              <span className="font-semibold text-stone-200 font-sans">
                {c.devNoteTypographyTitle}
              </span>
              <p className="text-stone-400 font-body leading-relaxed">
                {c.devNoteTypographyText}{' '}
                <code className="text-amber-300 font-mono">{c.devNoteTypographyFile}</code>.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 flex items-start gap-3.5">
            <Sparkles className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs">
              <span className="font-semibold text-stone-200 font-sans">
                {c.devNoteMediaTitle}
              </span>
              <p className="text-stone-400 font-body leading-relaxed">
                {c.devNoteMediaText}{' '}
                <code className="text-sky-300 font-mono">{c.devNoteMediaFile}</code>.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata & Credits */}
        <div className="pt-12 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-stone-400 font-caption">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="text-stone-300 font-medium font-sans">
              {c.creditsTag}
            </span>
            <span className="hidden sm:inline">·</span>
            <span>{c.creditsProject}</span>
            <span className="hidden sm:inline">·</span>
            <span>{c.creditsYear}</span>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <span>{c.creditsFairUse}</span>
            <span>·</span>
            <span className="text-amber-400/80">{c.creditsAudioSynth}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
