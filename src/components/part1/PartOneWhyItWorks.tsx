/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { content } from '../../content/longread.ru.ts';
import { HeartHandshake, Eye, Link, GraduationCap, Sparkles } from 'lucide-react';

export const PartOneWhyItWorks: React.FC = () => {
  const text = content.partOne.section6WhyItWorks;

  return (
    <section
      id="part1-section6"
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

        {/* 90% Visual Infographic Grid: 4 Pillars of Longevity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {text.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/50 hover:bg-stone-900 transition-all space-y-4 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400 px-2.5 py-1 rounded bg-stone-950 border border-stone-800">
                    PILLAR 0{pillar.pillarNumber}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    {idx === 0 && <HeartHandshake className="w-5 h-5" />}
                    {idx === 1 && <Eye className="w-5 h-5" />}
                    {idx === 2 && <Link className="w-5 h-5" />}
                    {idx === 3 && <GraduationCap className="w-5 h-5" />}
                  </div>
                </div>

                <h3 className="text-lg font-heading font-semibold text-stone-100 leading-snug">
                  {pillar.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed pt-4 border-t border-stone-800">
                {pillar.explanation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
