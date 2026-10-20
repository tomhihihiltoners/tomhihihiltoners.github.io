import React, { useEffect, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { EvidenceFrame } from '../config';

interface VisualEvidenceSectionProps {
  explanation: string;
  frames: EvidenceFrame[];
}

export const VisualEvidenceSection: React.FC<VisualEvidenceSectionProps> = ({
  explanation,
  frames,
}) => {
  const [selectedFrame, setSelectedFrame] = useState<EvidenceFrame | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!selectedFrame) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsClosing(true);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedFrame]);

  const closeLightbox = () => {
    if (!isClosing) setIsClosing(true);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto bg-black border-t border-white/10">
      <div className="mb-10 max-w-3xl">
        <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-normal">
          {explanation}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {frames.map((frame) => (
          <div
            key={frame.id}
            className="flex flex-col bg-[#0A0A0A] border border-white/10 rounded-lg overflow-hidden"
          >
            <button
              type="button"
              onClick={() => {
                setSelectedFrame(frame);
                setIsClosing(false);
              }}
              aria-label={`View ${frame.tag} full screen`}
              className="group relative block w-full aspect-video bg-black text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <img
                src={frame.imageSrc}
                alt={frame.tag}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-xs font-mono font-bold text-white border border-white/10">
                {frame.tag}
              </span>
              <span className="absolute top-3 right-3 rounded-full border border-white/20 bg-black/70 p-2 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <ZoomIn size={20} aria-hidden="true" />
              </span>
            </button>
            {frame.description && (
              <div className="p-4 text-xs text-white/60 font-mono">
                {frame.description}
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedFrame && (
        <div
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
          onAnimationEnd={(event) => {
            if (isClosing && event.target === event.currentTarget) {
              setSelectedFrame(null);
              setIsClosing(false);
            }
          }}
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 ${
            isClosing
              ? 'animate-[evidence-fade-out_300ms_ease-in_forwards]'
              : 'animate-[evidence-fade-in_300ms_ease-out]'
          }`}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedFrame.tag}
            className="relative flex max-h-full max-w-full flex-col items-center"
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close full-screen image"
              className="absolute -top-2 -right-2 z-10 rounded-full border border-white/30 bg-black/80 p-3 text-white transition-colors duration-300 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:top-0 sm:right-0 sm:translate-x-1/2 sm:-translate-y-1/2"
            >
              <X size={28} aria-hidden="true" />
            </button>
            <img
              src={selectedFrame.imageSrc}
              alt={selectedFrame.tag}
              className="max-h-[85vh] max-w-full object-contain md:max-h-[90vh]"
            />
            <div className="mt-4 max-w-full rounded border border-white/15 bg-black/70 px-4 py-2 text-center text-sm text-white">
              <span className="font-mono font-bold">{selectedFrame.tag}</span>
              {selectedFrame.description && (
                <span className="ml-3 text-white/70">
                  {selectedFrame.description}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
