import parseVideoSource from '../utils/parseVideoSource';

function MediaGallery({ media }) {
  if (!media) return null;

  const videos = Array.isArray(media.videos) ? media.videos.map(parseVideoSource).filter(Boolean) : [];
  const hasVideos = videos.length > 0;
  const hasImages = Array.isArray(media.images) && media.images.length > 0;

  if (!hasVideos && !hasImages) {
    return null;
  }

  return (
    <div className="media-gallery">
      {hasVideos &&
        videos.map((video, index) => (
          <div
            className={`media-panel media-panel--video${video.type === 'embed' ? ' media-panel--embed' : ''}`}
            key={`video-${index}`}
          >
            {video.type === 'embed' ? (
              <iframe
                className="project-media-frame"
                src={video.src}
                title={`Project video ${index + 1}`}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-presentation"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                referrerPolicy="no-referrer"
              />
            ) : (
              <video controls preload="metadata" playsInline src={video.src}>
                Your browser does not support HTML5 video.
              </video>
            )}
          </div>
        ))}

      {hasImages &&
        media.images.map((imageUrl, index) => (
          <div className="media-panel" key={`image-${index}`}>
            <img src={imageUrl} alt={`Project visual ${index + 1}`} loading="lazy" />
          </div>
        ))}
    </div>
  );
}

export default MediaGallery;
