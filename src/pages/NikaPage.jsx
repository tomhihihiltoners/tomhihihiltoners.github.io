import { useCallback, useEffect, useRef, useState } from 'react';
import { NIKA_AUDIO_URL, NIKA_AUDIO_VOLUME, NIKA_IMAGES } from '../data/nika';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import '../styles/nika.css';

/** How long each image stays on screen. */
const SLIDE_INTERVAL_MS = 500;

function AudioIcon({ playing }) {
  return playing ? (
    <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <rect x="3" y="2" width="4" height="12" fill="currentColor" />
      <rect x="9" y="2" width="4" height="12" fill="currentColor" />
    </svg>
  ) : (
    <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M4 2.4v11.2L14 8z" fill="currentColor" />
    </svg>
  );
}

export default function NikaPage() {
  useDocumentMeta('Nika', 'Nika — слайдшоу.');

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [audioUnavailable, setAudioUnavailable] = useState(false);
  const audioRef = useRef(null);

  const hasAudio = Boolean(NIKA_AUDIO_URL);

  /* One interval for the lifetime of the page: the callback uses a functional
     update, so it advances forever without restarting or stacking timers. */
  useEffect(() => {
    if (NIKA_IMAGES.length < 2) return undefined;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % NIKA_IMAGES.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  /* Decode every frame up front so switching never flashes an empty box. */
  useEffect(() => {
    const preloaded = NIKA_IMAGES.map((src) => {
      const image = new Image();
      image.src = src;
      if (typeof image.decode === 'function') image.decode().catch(() => {});
      return image;
    });

    return () => {
      preloaded.length = 0;
    };
  }, []);

  /* Mirror the real audio element state instead of guessing it. */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => {
      setAudioUnavailable(true);
      setIsPlaying(false);
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  /* Try autoplay once; browsers may refuse until the user interacts. */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !hasAudio) return;

    audio.volume = NIKA_AUDIO_VOLUME;

    const attempt = audio.play();
    if (attempt && typeof attempt.catch === 'function') {
      attempt.catch(() => setIsBlocked(true));
    }
  }, [hasAudio]);

  /* If autoplay was blocked, the first tap or key press starts the music. */
  useEffect(() => {
    if (!isBlocked || !hasAudio) return undefined;

    const resume = () => {
      const audio = audioRef.current;
      if (!audio) return;
      const attempt = audio.play();
      if (attempt && typeof attempt.catch === 'function') {
        attempt.then(() => setIsBlocked(false)).catch(() => {});
      }
    };

    const events = ['pointerdown', 'keydown', 'touchstart'];
    events.forEach((name) => window.addEventListener(name, resume, { once: true }));

    return () => {
      events.forEach((name) => window.removeEventListener(name, resume));
    };
  }, [isBlocked, hasAudio]);

  const toggleAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      const attempt = audio.play();
      if (attempt && typeof attempt.catch === 'function') {
        attempt.catch(() => setIsBlocked(true));
      }
    } else {
      audio.pause();
    }
  }, []);

  return (
    <div className="nika-stage">
      {NIKA_IMAGES.map((src, index) => (
        <img
          key={src}
          className={index === activeIndex ? 'nika-slide is-active' : 'nika-slide'}
          src={src}
          alt={`Слайд ${index + 1}`}
          aria-hidden={index === activeIndex ? undefined : 'true'}
          decoding="async"
          draggable="false"
        />
      ))}

      {hasAudio ? (
        <audio ref={audioRef} src={NIKA_AUDIO_URL} loop preload="auto" />
      ) : null}

      {hasAudio ? (
        <button
          type="button"
          className={[
            'nika-audio',
            isBlocked && !isPlaying && !audioUnavailable ? 'is-blocked' : '',
            audioUnavailable ? 'is-unavailable' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          onClick={toggleAudio}
          disabled={audioUnavailable}
          aria-label={isPlaying ? 'Пауза' : 'Включить музыку'}
          title={
            audioUnavailable
              ? 'Аудио недоступно — замените NIKA_AUDIO_URL в src/data/nika.js'
              : isPlaying
                ? 'Пауза'
                : 'Включить музыку'
          }
        >
          <AudioIcon playing={isPlaying} />
        </button>
      ) : null}
    </div>
  );
}
