import React from 'react';
import { SITE_CONFIG } from './config';
import { HeroCover } from './components/HeroCover';
import { VideoPlayerSection } from './components/VideoPlayerSection';
import { VisualEvidenceSection } from './components/VisualEvidenceSection';
import { VerdictSection } from './components/VerdictSection';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 1. Обложка */}
      <HeroCover 
        author={SITE_CONFIG.author}
        title={SITE_CONFIG.title}
      />

      {/* 2. Оригинальная реклама 1995 года */}
      <VideoPlayerSection
        id="original"
        tag={SITE_CONFIG.originalCommercial.tag}
        heading={SITE_CONFIG.originalCommercial.heading}
        videoSrc={SITE_CONFIG.originalCommercial.videoSrc}
      />

      {/* 3. AI-реклама 2025 года */}
      <VideoPlayerSection
        id="ai"
        tag={SITE_CONFIG.aiCommercial.tag}
        heading={SITE_CONFIG.aiCommercial.heading}
        videoSrc={SITE_CONFIG.aiCommercial.videoSrc}
      />

      {/* 4. Визуальные доказательства */}
      <VisualEvidenceSection
        explanation={SITE_CONFIG.evidence.explanation}
        frames={SITE_CONFIG.evidence.frames}
      />

      {/* 5. Мой вердикт */}
      <VerdictSection
        heading={SITE_CONFIG.verdict.heading}
        text={SITE_CONFIG.verdict.text}
      />
    </div>
  );
};

export default App;
