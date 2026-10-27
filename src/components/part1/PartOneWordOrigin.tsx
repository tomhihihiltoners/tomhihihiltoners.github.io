/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { mediaConfig } from '../../config/media.ts';
import { MediaImage, MediaGif, GoogleDriveVideo } from '../MediaComponents.tsx';
import { Globe, ExternalLink, Sparkles, X, Video, Image as ImageIcon, Volume2, ShieldCheck } from 'lucide-react';
import { playRickrollSynthHook, playRetroClick } from '../../utils/audioSynth.ts';
import { content } from '../../content/longread.ru.ts';

export const PartOneWordOrigin: React.FC<{ audioMuted: boolean }> = ({ audioMuted }) => {
  const [showRickrollModal, setShowRickrollModal] = useState(false);
  const [synthPlaying, setSynthPlaying] = useState(false);
  const [modalMediaType, setModalMediaType] = useState<'gif' | 'video'>('gif');

  const text = content.partOne.section3WordOrigin;

  const handleTriggerRickroll = () => {
    playRetroClick();
    setShowRickrollModal(true);
    if (!audioMuted) {
      setSynthPlaying(true);
      playRickrollSynthHook(0.2);
      setTimeout(() => setSynthPlaying(false), 2500);
    }
  };

  return (
    <section
      id="part1-section3"
      className="py-24 px-6 lg:px-12 bg-stone-900 border-t border-stone-800 text-stone-200"
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

        {/* 90% Visual Showcase: Side-by-Side Visual Exhibits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Visual Exhibit 1: The Duckroll Ancestor (2006) */}
          <div className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 flex flex-col justify-between shadow-2xl">
            <div className="relative aspect-video sm:aspect-[4/3] bg-stone-900 overflow-hidden group">
              <MediaImage
                src={mediaConfig.howRickrollingHappened.duckrollGif}
                alt={text.duckrollAlt}
                aspectRatioClass="w-full h-full"
                className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-stone-900/90 border border-stone-700 text-xs font-mono text-amber-400">
                2006 ORIGIN
              </div>
            </div>

            <div className="p-6 space-y-2 border-t border-stone-800 bg-stone-950/80">
              <h3 className="text-lg font-heading font-semibold text-stone-100">
                {text.duckrollTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed">
                {text.duckrollDesc}
              </p>
            </div>
          </div>

          {/* Visual Exhibit 2: March 2007 — Interactive Bait & Switch Terminal */}
          <div className="rounded-2xl overflow-hidden border border-stone-700 bg-stone-950 flex flex-col justify-between shadow-2xl">
            {/* Retro Browser Chrome Header */}
            <div>
              <div className="bg-stone-800 px-4 py-3 border-b border-stone-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-stone-300">
                    {text.forumTitle}
                  </span>
                </div>
                <Globe className="w-4 h-4 text-stone-400" />
              </div>

              {/* URL Address Bar */}
              <div className="bg-stone-850 px-4 py-2 border-b border-stone-700 flex items-center gap-2 text-xs font-mono text-stone-300">
                <span className="text-stone-500">http://</span>
                <span className="text-stone-200">{text.forumUrl}</span>
              </div>

              {/* Forum Thread Card */}
              <div className="p-6 space-y-4">
                <div className="border-b border-stone-800 pb-3 flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-400 font-bold">{text.forumAuthor}</span>
                  <span className="text-stone-500">{text.forumTimestamp}</span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-semibold text-stone-100 font-sans">
                    {text.forumThreadHeading}
                  </h4>
                  <p className="text-xs text-stone-400 font-sans">
                    {text.forumPostText}
                  </p>
                </div>

                {/* The Interactive Bait Button */}
                <div
                  onClick={handleTriggerRickroll}
                  className="group p-5 rounded-xl bg-stone-900 border border-amber-500/40 hover:border-amber-400 cursor-pointer transition-all shadow-lg flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="text-sm font-mono text-amber-400 group-hover:underline flex items-center gap-2">
                      <span>{text.baitFileName}</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] text-stone-400 font-sans block">
                      {text.baitFileInfo}
                    </span>
                  </div>

                  <button className="px-4 py-2 rounded-lg bg-amber-500 group-hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-colors shrink-0">
                    {text.baitButton}
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-stone-900/60 border-t border-stone-800 flex items-center gap-2 text-xs text-stone-400 font-caption">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{text.safeNote}</span>
            </div>
          </div>
        </div>

        {/* Modal: When the Rickroll is Triggered */}
        {showRickrollModal && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
            <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden border border-amber-500/80 bg-stone-950 shadow-2xl space-y-4">
              {/* Modal Bar */}
              <div className="bg-stone-900 px-5 py-3 border-b border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-semibold">{text.modal.headerBadge}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setModalMediaType(modalMediaType === 'gif' ? 'video' : 'gif')}
                    className="text-xs font-sans px-2.5 py-1 rounded border border-stone-700 bg-stone-800 text-stone-300 hover:text-white transition-colors"
                  >
                    {modalMediaType === 'gif' ? text.modal.toggleVideo : text.modal.toggleGif}
                  </button>
                  <button
                    onClick={() => setShowRickrollModal(false)}
                    className="text-stone-400 hover:text-white"
                    aria-label={text.modal.closeAria}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Media Player Viewport */}
              <div className="relative aspect-video bg-black overflow-hidden mx-4 rounded-xl border border-stone-800">
                {modalMediaType === 'gif' ? (
                  <MediaGif
                    src={mediaConfig.howRickrollingHappened.rickrollDanceGif}
                    alt={text.modal.altGif}
                    aspectRatioClass="w-full h-full"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <GoogleDriveVideo
                    src={mediaConfig.howRickrollingHappened.rickrollDriveVideo}
                    title={text.modal.videoTitle}
                    aspectRatioClass="w-full h-full"
                  />
                )}
                <div className="absolute top-3 left-3 bg-red-600 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-white tracking-widest uppercase">
                  {text.modal.recStamp}
                </div>
              </div>

              {/* Modal Caption & Actions */}
              <div className="px-6 pb-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-stone-100">
                      {text.modal.heading}
                    </h3>
                    <p className="text-xs text-amber-400 font-mono">
                      {text.modal.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-stone-400">
                    <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{synthPlaying ? text.modal.audioStatusPlaying : text.modal.audioStatusMuted}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                  {text.modal.analysis}
                </p>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setShowRickrollModal(false)}
                    className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-colors"
                  >
                    {text.modal.continueButton}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
