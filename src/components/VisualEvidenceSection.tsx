import React from 'react';
import { EvidenceFrame } from '../config';

interface VisualEvidenceSectionProps {
  explanation: string;
  frames: EvidenceFrame[];
}

export const VisualEvidenceSection: React.FC<VisualEvidenceSectionProps> = ({
  explanation,
  frames,
}) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto bg-black border-t border-white/10">
      <div className="mb-10 max-w-3xl">
        <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-normal">
          {explanation}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {frames.map((frame) => (
          <div
            key={frame.id}
            className="flex flex-col bg-[#0A0A0A] border border-white/10 rounded-lg overflow-hidden"
          >
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={frame.imageSrc}
                alt={frame.tag}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-xs font-mono font-bold text-white border border-white/10">
                {frame.tag}
              </div>
            </div>
            {frame.description && (
              <div className="p-4 text-xs text-white/60 font-mono">
                {frame.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
