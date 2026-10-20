import React from 'react';
import { getDrivePreviewUrl } from '../utils/driveEmbed';

interface VideoPlayerSectionProps {
  id: string;
  tag: string;
  heading: string;
  videoSrc: string;
}

export const VideoPlayerSection: React.FC<VideoPlayerSectionProps> = ({
  id,
  tag,
  heading,
  videoSrc,
}) => {
  const { embedUrl, error } = getDrivePreviewUrl(videoSrc);

  return (
    <section id={id} className="py-24 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto bg-black">
      <div className="mb-6">
        <div className="text-xs uppercase tracking-ultra text-white/40 mb-2 font-mono">
          {tag}
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
          {heading}
        </h2>
      </div>

      <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0A0A0A]">
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={heading}
              className="w-full h-full border-0 absolute inset-0"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="p-6 text-center text-sm text-white/40">
              {error || "Укажите ссылку на Google Drive"}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
