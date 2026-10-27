/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { mediaConfig } from '../../config/media.ts';
import { MediaImage, GoogleDriveVideo } from '../MediaComponents.tsx';
import { BlissLandscape } from '../ArtworkVisuals.tsx';
import { Monitor, Volume2, HardDrive, Trash2, Globe2, X, Minus, Video, Sparkles } from 'lucide-react';
import { playWindowsXPStartup, playRetroClick } from '../../utils/audioSynth.ts';
import { content } from '../../content/longread.ru.ts';

export const PartTwoCulturalSymbol: React.FC<{ audioMuted: boolean }> = ({ audioMuted }) => {
  const [showLunaDesktop, setShowLunaDesktop] = useState(true);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [activeWindow, setActiveWindow] = useState<'properties' | null>(null);
  const [isPlayingStartup, setIsPlayingStartup] = useState(false);
  const [showDriveDoc, setShowDriveDoc] = useState(false);
  const c = content.partTwo.culturalSymbol;

  const handlePlayStartupChord = () => {
    playRetroClick();
    setIsPlayingStartup(true);
    playWindowsXPStartup(audioMuted ? 0 : 0.28);
    setTimeout(() => setIsPlayingStartup(false), 3200);
  };

  const cardImages = [
    mediaConfig.wallpaperCulturalSymbol.crtMonitorPhoto,
    mediaConfig.wallpaperCulturalSymbol.windowsXpLunaWallpaper,
    mediaConfig.wallpaperCulturalSymbol.liminalSpaceBlissRemix,
  ];

  return (
    <section
      id="part2-wallpaper"
      className="py-24 px-6 lg:px-12 bg-stone-900 border-t border-stone-800 text-stone-200"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-stone-800">
          <div>
            <div className="text-xs uppercase tracking-widest text-sky-400 font-caption mb-3 font-semibold">
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

        {/* Embedded Google Drive Video Retrospective */}
        {showDriveDoc && (
          <div className="max-w-4xl mx-auto mb-8 animate-fade-in">
            <GoogleDriveVideo
              src={mediaConfig.wallpaperCulturalSymbol.windowsXpDriveVideo}
              title={c.videoTitle}
              aspectRatioClass="aspect-video"
            />
          </div>
        )}

        {/* 90% Visual Interactive Windows XP Desktop Simulation & Controls */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-caption uppercase tracking-wider text-stone-400">
              {c.displayLabel}
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  playRetroClick();
                  setShowDriveDoc(!showDriveDoc);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-stone-300 hover:text-white text-xs font-caption transition-colors"
                title={c.videoTitle}
              >
                <Video className="w-3.5 h-3.5 text-sky-400" />
                <span>{showDriveDoc ? c.buttonHideVideo : c.buttonWatchVideo}</span>
              </button>

              <button
                onClick={handlePlayStartupChord}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-950/80 border border-sky-800/80 text-sky-300 hover:text-white text-xs font-caption transition-colors"
                title={c.buttonPlayStartup}
              >
                <Volume2 className="w-3.5 h-3.5 text-sky-400" />
                <span>{isPlayingStartup ? c.buttonPlayingStartup : c.buttonPlayStartup}</span>
              </button>

              <button
                onClick={() => {
                  playRetroClick();
                  setShowLunaDesktop(!showLunaDesktop);
                }}
                className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-750 text-stone-200 border border-stone-700 text-xs font-caption transition-colors"
              >
                {showLunaDesktop ? c.buttonPureLandscape : c.buttonClassicShell}
              </button>
            </div>
          </div>

          {/* Desktop Monitor Screen Enclosure */}
          <div className="relative rounded-2xl overflow-hidden border-4 border-stone-700 bg-stone-950 shadow-2xl aspect-[16/10] sm:aspect-[16/9] flex flex-col justify-between">
            {/* The Bliss Background */}
            <div className="absolute inset-0 z-0">
              <MediaImage
                src={mediaConfig.wallpaperCulturalSymbol.windowsXpLunaWallpaper}
                alt={c.altWallpaper}
                aspectRatioClass="w-full h-full"
                className="w-full h-full object-cover"
                fallbackComponent={<BlissLandscape mode="1996" className="w-full h-full object-cover" />}
              />
            </div>

            {/* Desktop Icons */}
            {showLunaDesktop && (
              <div className="relative z-10 p-6 flex flex-col gap-6 w-32 select-none">
                {/* My Computer */}
                <div
                  onClick={() => {
                    playRetroClick();
                    setActiveWindow('properties');
                  }}
                  className="group flex flex-col items-center gap-1 cursor-pointer p-2 rounded hover:bg-sky-500/20 transition-all text-center"
                >
                  <div className="w-10 h-10 rounded bg-stone-900/80 border border-stone-600 flex items-center justify-center text-sky-400 shadow-md group-hover:scale-105 transition-transform">
                    <HardDrive className="w-5 h-5 text-sky-300" />
                  </div>
                  <span className="text-[11px] font-sans text-white font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    {c.iconMyComputer}
                  </span>
                </div>

                {/* Recycle Bin */}
                <div
                  onClick={playRetroClick}
                  className="group flex flex-col items-center gap-1 cursor-pointer p-2 rounded hover:bg-sky-500/20 transition-all text-center"
                >
                  <div className="w-10 h-10 rounded bg-stone-900/80 border border-stone-600 flex items-center justify-center text-stone-300 shadow-md group-hover:scale-105 transition-transform">
                    <Trash2 className="w-5 h-5 text-stone-300" />
                  </div>
                  <span className="text-[11px] font-sans text-white font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    {c.iconRecycleBin}
                  </span>
                </div>

                {/* Internet Explorer */}
                <div
                  onClick={playRetroClick}
                  className="group flex flex-col items-center gap-1 cursor-pointer p-2 rounded hover:bg-sky-500/20 transition-all text-center"
                >
                  <div className="w-10 h-10 rounded bg-stone-900/80 border border-stone-600 flex items-center justify-center text-sky-400 shadow-md group-hover:scale-105 transition-transform">
                    <Globe2 className="w-5 h-5 text-sky-300" />
                  </div>
                  <span className="text-[11px] font-sans text-white font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    {c.iconInternetExplorer}
                  </span>
                </div>
              </div>
            )}

            {/* Draggable/Togglable System Properties Window */}
            {activeWindow === 'properties' && (
              <div className="absolute top-12 left-1/2 -translate-x-1/2 z-30 w-80 sm:w-96 rounded-t-lg bg-[#ECE9D8] text-stone-900 border border-stone-600 shadow-2xl overflow-hidden font-sans text-xs select-none">
                <div className="bg-gradient-to-r from-[#0055EA] to-[#0877FE] px-3 py-1.5 flex items-center justify-between text-white font-medium">
                  <span>{c.windowTitle}</span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveWindow(null)}
                      className="w-4 h-4 rounded bg-[#D84315] hover:bg-red-600 flex items-center justify-center text-white"
                      aria-label="Close"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="p-4 space-y-3 bg-[#F0EEE2]">
                  <div className="flex items-center gap-3 border-b border-stone-300 pb-3">
                    <Monitor className="w-8 h-8 text-[#0055EA]" />
                    <div>
                      <div className="font-bold text-stone-900">{c.osVersion}</div>
                      <div className="text-[11px] text-stone-600">{c.osEdition}</div>
                    </div>
                  </div>

                  <div className="text-[11px] text-stone-700 space-y-1">
                    <div>{c.osDefaultWallpaper}</div>
                  </div>

                  <div className="p-2.5 rounded bg-amber-50 border border-amber-200 text-[11px] text-amber-900 leading-relaxed font-body">
                    {c.osQuote}
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => {
                        playRetroClick();
                        setActiveWindow(null);
                      }}
                      className="px-4 py-1 bg-[#ECE9D8] hover:bg-stone-200 border border-stone-500 rounded text-xs font-medium shadow-sm"
                    >
                      {c.buttonOk}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Classic Windows XP Start Menu Flyout */}
            {showLunaDesktop && startMenuOpen && (
              <div className="absolute bottom-10 left-0 z-30 w-72 rounded-t-lg bg-white border border-[#0055EA] shadow-2xl overflow-hidden font-sans text-stone-900">
                <div className="bg-gradient-to-r from-[#0055EA] to-[#0877FE] p-3 flex items-center gap-3 text-white">
                  <div className="w-9 h-9 rounded-full bg-amber-400 border border-white flex items-center justify-center font-bold text-stone-900 text-sm">
                    XP
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight">{c.startUser}</div>
                    <div className="text-[10px] text-blue-200">{c.startSubtitle}</div>
                  </div>
                </div>
                <div className="p-3 bg-[#D3E5FA] space-y-2 text-xs">
                  <div className="p-2 bg-white rounded border border-blue-200 font-medium text-stone-800">
                    {c.startMenuArchive}
                  </div>
                  <div className="p-2 hover:bg-blue-100 rounded cursor-pointer text-stone-700">
                    {c.startMenuControl}
                  </div>
                  <div className="p-2 hover:bg-blue-100 rounded cursor-pointer text-stone-700">
                    {c.startMenuMessenger}
                  </div>
                </div>
              </div>
            )}

            {/* Windows XP Classic Luna Taskbar */}
            {showLunaDesktop ? (
              <div className="relative z-20 h-10 bg-gradient-to-r from-[#245DDA] via-[#3882F6] to-[#1941A5] border-t border-sky-400 flex items-center justify-between px-1 select-none">
                {/* Green Start Button */}
                <button
                  onClick={() => {
                    playRetroClick();
                    setStartMenuOpen(!startMenuOpen);
                  }}
                  className="h-8 px-4 rounded-r-xl bg-gradient-to-r from-[#388E3C] via-[#4CAF50] to-[#2E7D32] hover:brightness-110 flex items-center gap-1.5 shadow-md border-r border-green-300 text-white font-bold italic text-xs tracking-wider"
                >
                  <span>{c.startBtn}</span>
                </button>

                {/* Taskbar Active Item */}
                <div className="flex-1 px-3 flex items-center">
                  <div className="h-7 px-3 bg-[#1941A5] border border-blue-400/50 rounded flex items-center gap-2 text-xs text-white">
                    <Monitor className="w-3.5 h-3.5 text-sky-300" />
                    <span className="truncate">{c.taskbarActiveItem}</span>
                  </div>
                </div>

                {/* System Tray (Clock & Sound) */}
                <div className="h-full bg-[#0F2D6B] px-3 flex items-center gap-3 text-white text-xs border-l border-blue-700 font-mono">
                  <Volume2 className="w-3.5 h-3.5 text-sky-300" />
                  <span>{c.trayTime}</span>
                </div>
              </div>
            ) : (
              <div className="relative z-20 p-4 bg-stone-950/80 backdrop-blur-sm border-t border-stone-800 flex items-center justify-between text-xs text-stone-400 font-caption">
                <span>{c.uncroppedBanner}</span>
              </div>
            )}
          </div>
        </div>

        {/* 90% Visual Cultural Impact Strip: 3 Image Exhibit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {c.cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 shadow-xl flex flex-col justify-between group"
            >
              <div className="relative aspect-video overflow-hidden bg-stone-900">
                <MediaImage
                  src={cardImages[idx]}
                  alt={card.title}
                  aspectRatioClass="w-full h-full"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-stone-950/80 text-[11px] font-mono text-sky-400 border border-stone-700">
                  {card.num}
                </div>
              </div>

              <div className="p-5 space-y-2 bg-stone-950">
                <h4 className="text-base font-heading font-semibold text-stone-100">
                  {card.title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-400 font-sans leading-relaxed">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
