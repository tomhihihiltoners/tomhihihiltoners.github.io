/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Film, ImageOff, ExternalLink, AlertCircle, RefreshCw } from 'lucide-react';
import { content } from '../content/longread.ru.ts';

// ============================================================================
// 1. MediaImage: Reusable image loader with error handling & zero-break fallback
// ============================================================================
export interface MediaImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackComponent?: React.ReactNode;
  aspectRatioClass?: string;
  className?: string;
  caption?: string;
}

export const MediaImage: React.FC<MediaImageProps> = ({
  src,
  alt,
  fallbackComponent,
  aspectRatioClass = 'aspect-video',
  className = '',
  caption,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${className}`}>
      {/* Loading Shimmer */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-stone-900 animate-pulse flex items-center justify-center z-10">
          <span className="text-xs font-mono text-stone-500 uppercase tracking-widest">
            {content.mediaComponents.loadingMedia}
          </span>
        </div>
      )}

      {/* Render Image or Graceful Fallback */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          {...rest}
        />
      ) : fallbackComponent ? (
        fallbackComponent
      ) : (
        <div className="w-full h-full bg-stone-900 border border-stone-800 flex flex-col items-center justify-center p-6 text-center text-stone-400">
          <ImageOff className="w-8 h-8 text-stone-600 mb-2" />
          <span className="text-xs font-mono uppercase tracking-wider text-stone-300">
            {alt || content.mediaComponents.fallbackImageTitle}
          </span>
          <span className="text-[11px] text-stone-500 mt-1 font-caption">
            {content.mediaComponents.fallbackImageNotice}
          </span>
        </div>
      )}

      {/* Optional Caption Overlay */}
      {caption && (
        <div className="absolute bottom-2 left-2 right-2 bg-stone-950/80 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] text-stone-300 font-caption pointer-events-none">
          {caption}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 2. MediaGif: Reusable animated GIF viewer that preserves native playback
// ============================================================================
export interface MediaGifProps {
  src: string;
  alt: string;
  fallbackComponent?: React.ReactNode;
  aspectRatioClass?: string;
  className?: string;
  showBadge?: boolean;
}

export const MediaGif: React.FC<MediaGifProps> = ({
  src,
  alt,
  fallbackComponent,
  aspectRatioClass = 'aspect-video',
  className = '',
  showBadge = true,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${className}`}>
      {/* Loading State */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-stone-900 animate-pulse flex items-center justify-center z-10">
          <span className="text-xs font-mono text-stone-500 uppercase tracking-widest">
            {content.mediaComponents.loadingAnimation}
          </span>
        </div>
      )}

      {/* Animated GIF Image */}
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      ) : fallbackComponent ? (
        fallbackComponent
      ) : (
        <div className="w-full h-full bg-stone-900 border border-stone-800 flex flex-col items-center justify-center p-6 text-center text-stone-400">
          <Film className="w-8 h-8 text-stone-600 mb-2" />
          <span className="text-xs font-mono uppercase tracking-wider text-stone-300">
            {alt || content.mediaComponents.fallbackGifTitle}
          </span>
          <span className="text-[11px] text-stone-500 mt-1 font-caption">
            {content.mediaComponents.fallbackGifNotice}
          </span>
        </div>
      )}

      {/* GIF Indicator Badge */}
      {showBadge && !hasError && !isLoading && (
        <div className="absolute top-2 right-2 bg-stone-950/80 border border-stone-700/80 px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold text-amber-400 tracking-wider pointer-events-none">
          {content.mediaComponents.gifBadge}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 3. GoogleDriveVideo: Embedded Google Drive video preview with responsive frame
// ============================================================================
export interface GoogleDriveVideoProps {
  src: string;
  title: string;
  aspectRatioClass?: string;
  className?: string;
  fallbackComponent?: React.ReactNode;
}

export const GoogleDriveVideo: React.FC<GoogleDriveVideoProps> = ({
  src,
  title,
  aspectRatioClass = 'aspect-video',
  className = '',
}) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showTroubleshoot, setShowTroubleshoot] = useState(false);

  // Normalize Google Drive URL to the required /preview embed format
  const embedUrl = src.includes('/view')
    ? src.replace(/\/view(\?.*)?$/, '/preview')
    : src;

  return (
    <div className={`relative overflow-hidden rounded-xl border border-stone-800 bg-stone-950 shadow-2xl ${className}`}>
      {/* Google Drive Header Status */}
      <div className="flex items-center justify-between px-4 py-2 bg-stone-950 border-b border-stone-800 text-xs font-caption text-stone-400">
        <div className="flex items-center gap-2">
          <Film className="w-3.5 h-3.5 text-amber-500" />
          <span className="truncate max-w-[220px] sm:max-w-md">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowTroubleshoot(!showTroubleshoot)}
            className="text-[11px] text-stone-400 hover:text-stone-200 transition-colors flex items-center gap-1"
            title="Google Drive permissions and preview help"
          >
            <AlertCircle className="w-3 h-3 text-amber-400" />
            <span className="hidden sm:inline">{content.mediaComponents.embedInfoButton}</span>
          </button>
          <a
            href={embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:text-stone-100 text-stone-400 transition-colors"
            title={content.mediaComponents.openInDriveTitle}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Embedded Iframe Container */}
      <div className={`relative w-full ${aspectRatioClass} bg-stone-950`}>
        {/* Loading Spinner */}
        {!iframeLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-950 z-10 text-stone-400">
            <RefreshCw className="w-6 h-6 animate-spin text-amber-500 mb-2" />
            <span className="text-xs font-mono uppercase tracking-wider">
              {content.mediaComponents.connectingDrive}
            </span>
          </div>
        )}

        <iframe
          src={embedUrl}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          onLoad={() => setIframeLoaded(true)}
          className="w-full h-full border-0 absolute inset-0"
        />
      </div>

      {/* Troubleshoot / Permissions notice modal toggle */}
      {showTroubleshoot && (
        <div className="p-4 bg-stone-900 border-t border-stone-800 text-xs space-y-2 font-sans text-stone-300">
          <div className="font-semibold text-amber-400 font-caption">
            {content.mediaComponents.driveNoticeTitle}
          </div>
          <p className="leading-relaxed">
            {content.mediaComponents.driveNoticeDescription}
          </p>
          <ul className="list-disc list-inside space-y-1 text-stone-400">
            {content.mediaComponents.driveNoticeBullets.map((bullet, idx) => (
              <li key={idx}>{bullet}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
