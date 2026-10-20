import React from 'react';

interface HeroCoverProps {
  author: string;
  title: string;
}

export const HeroCover: React.FC<HeroCoverProps> = ({ author, title }) => {
  return (
    <header className="min-h-screen flex flex-col justify-between items-center px-6 py-12 text-center bg-black">
      <div className="pt-4">
        <span className="text-xs uppercase tracking-ultra text-white/50 font-medium">
          {author}
        </span>
      </div>

      <div className="my-auto">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight uppercase text-white leading-none">
          {title}
        </h1>
      </div>

      <div className="pb-4 text-xs text-white/30 uppercase tracking-widest">
        ↓
      </div>
    </header>
  );
};
