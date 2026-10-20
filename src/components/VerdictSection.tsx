import React from 'react';

interface VerdictSectionProps {
  heading: string;
  text: string;
}

export const VerdictSection: React.FC<VerdictSectionProps> = ({ heading, text }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 max-w-4xl mx-auto bg-black border-t border-white/10">
      <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6">
        {heading}
      </h2>
      <div className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
        <p>{text}</p>
      </div>
    </section>
  );
};
