import { useEffect, useState } from 'react';
import parseVideoSource from '../utils/parseVideoSource';

function getFirstAvailableMedia(project) {
  const video = Array.isArray(project?.media?.videos)
    ? project.media.videos.map(parseVideoSource).find(Boolean)
    : null;

  const image = Array.isArray(project?.media?.images)
    ? project.media.images.find((url) => typeof url === 'string' && url.trim())
    : null;

  return { video, image };
}

function resolveInitialPreview(project, isHero) {
  if (project?.cover) {
    return { type: 'image', src: project.cover };
  }

  const { video, image } = getFirstAvailableMedia(project);

  if (!video) {
    return {
      type: image ? 'image' : 'none',
      src: image || '',
    };
  }

  if (video.type === 'embed') {
    return { type: isHero || !image ? 'embed' : 'image', src: isHero || !image ? video.src : image };
  }

  return { type: 'loading', src: video.src };
}

function ProjectMediaPreview({ project, className = '', alt, isHero = false }) {
  const initialPreview = resolveInitialPreview(project, isHero);
  const [previewType, setPreviewType] = useState(initialPreview.type);
  const [previewSrc, setPreviewSrc] = useState(initialPreview.src);

  useEffect(() => {
    let cancelled = false;

    if (project?.cover) {
      return undefined;
    }

    const { video, image } = getFirstAvailableMedia(project);
    const fallbackImage = image || '';

    if (!video || video.type !== 'video') {
      return undefined;
    }

    const videoElement = document.createElement('video');
    videoElement.preload = 'auto';
    videoElement.muted = true;
    videoElement.playsInline = true;
    videoElement.crossOrigin = 'anonymous';
    videoElement.src = video.src;

    const handleLoaded = () => {
      try {
        const canvas = document.createElement('canvas');
        const width = videoElement.videoWidth || 1280;
        const height = videoElement.videoHeight || 720;

        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext('2d');
        if (!context) {
          throw new Error('Canvas not supported');
        }

        context.drawImage(videoElement, 0, 0, width, height);
        const frameDataUrl = canvas.toDataURL('image/jpeg', 0.8);

        if (!cancelled) {
          setPreviewType('image');
          setPreviewSrc(frameDataUrl);
        }
      } catch {
        if (!cancelled) {
          setPreviewType('video');
          setPreviewSrc(video.src);
        }
      }
    };

    const handleError = () => {
      if (!cancelled) {
        setPreviewType(fallbackImage ? 'image' : 'video');
        setPreviewSrc(fallbackImage || video.src);
      }
    };

    videoElement.addEventListener('loadeddata', handleLoaded);
    videoElement.addEventListener('error', handleError);
    videoElement.load();

    return () => {
      cancelled = true;
      videoElement.pause();
      videoElement.removeEventListener('loadeddata', handleLoaded);
      videoElement.removeEventListener('error', handleError);
    };
  }, [project]);

  if (previewType === 'embed') {
    return (
      <iframe
        className={`${className} project-media-frame`}
        src={previewSrc}
        title={alt || project?.title || 'Project video'}
        loading={isHero ? 'eager' : 'lazy'}
        sandbox="allow-scripts allow-same-origin allow-presentation"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        referrerPolicy="no-referrer"
        tabIndex={isHero ? 0 : -1}
      />
    );
  }

  if (previewType === 'video') {
    return (
      <video
        className={className}
        src={previewSrc}
        muted
        loop
        playsInline
        autoPlay
        controls={isHero}
        poster={project?.cover || ''}
      >
        <track kind="captions" />
      </video>
    );
  }

  if (previewType === 'image' && previewSrc) {
    return <img className={className} src={previewSrc} alt={alt || project?.title || 'Project preview'} loading="lazy" />;
  }

  if (previewType === 'none') {
    return <div className={`${className} project-media-placeholder`} aria-label={alt || 'Project preview unavailable'} />;
  }

  return <div className={`${className} project-media-placeholder`} aria-label={alt || 'Project preview loading'} />;
}

export default ProjectMediaPreview;
