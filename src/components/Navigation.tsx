/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { playRetroClick } from '../utils/audioSynth.ts';
import { content } from '../content/longread.ru.ts';

interface NavigationProps {
  audioMuted: boolean;
  onToggleAudio: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  audioMuted,
  onToggleAudio,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nav = content.navigation;

  return (
    <>
      {/* Top Thin Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-stone-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Navigation Bar */}
      <header className="fixed top-1 left-0 right-0 z-40 bg-stone-950/85 backdrop-blur-md border-b border-stone-800/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6 py-3.5">
          {/* Brand title wordmark */}
          <a
            href="#part1-hero"
            className="text-base font-semibold tracking-tight text-stone-100 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 font-heading"
          >
            {nav.brandTitle}
          </a>

          {/* Sequential Chapter Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 text-xs font-medium text-stone-300 font-caption tracking-wide">
            {nav.sectionLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-amber-400 text-stone-300 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}

            <span className="text-stone-700" aria-hidden="true">|</span>

            <a
              href="#colophon"
              className="hover:text-stone-100 text-stone-400 transition-colors whitespace-nowrap shrink-0"
            >
              {nav.colophonLink}
            </a>
          </nav>

          {/* Audio Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                playRetroClick();
                onToggleAudio();
              }}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-caption text-stone-300 hover:text-white rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 transition-colors whitespace-nowrap shrink-0"
              title={audioMuted ? nav.audioButton.enableTitle : nav.audioButton.muteTitle}
              aria-label={audioMuted ? nav.audioButton.enableAria : nav.audioButton.muteAria}
            >
              {audioMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-stone-500" />
                  <span className="hidden sm:inline">{nav.audioButton.mutedLabel}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">{nav.audioButton.activeLabel}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
