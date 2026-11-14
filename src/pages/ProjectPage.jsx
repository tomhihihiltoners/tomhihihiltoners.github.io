import { Link, useParams } from 'react-router-dom';
import MediaGallery from '../components/MediaGallery';
import ProjectMediaPreview from '../components/ProjectMediaPreview';
import { projects } from '../data/projects';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  useDocumentMeta(
    project ? project.title : 'Project not found',
    project ? project.description : 'The requested project does not exist.',
  );

  if (!project) {
    return (
      <main className="container not-found-shell">
        <div className="not-found-card">
          <p className="eyebrow">Project unavailable</p>
          <h1>That project could not be found.</h1>
          <Link to="/" className="button button--primary">
            Back to homepage
          </Link>
        </div>
      </main>
    );
  }

  const projectIndex = projects.findIndex((item) => item.id === project.id);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const hasTeam = Array.isArray(project.team) && project.team.length > 0;
  const hasVkLink = Boolean(project.vkUrl);
  const hasDownloadLink = Boolean(project.downloadUrl);

  return (
    <main className="project-page">
      <header className="topbar topbar--project">
        <div className="container topbar__inner">
          <Link to="/" className="brand" aria-label="Go to homepage">
            Дмитрий Давыдов
          </Link>
          <Link to="/" className="back-link">
            ← Обратно в портфолио
          </Link>
        </div>
      </header>

      <section className="project-hero">
        <div className="container">
          <div className="project-hero__media">
            <ProjectMediaPreview project={project} alt={project.title} isHero />
          </div>
          <div className="project-hero__info">
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <div className="project-hero__meta">
              <span>{project.year}</span>
            </div>
            <p className="project-description">{project.description}</p>

            <div className="project-actions">
              {hasVkLink && (
                <a className="button button--primary" href={project.vkUrl} target="_blank" rel="noreferrer">
                  View VK post
                </a>
              )}
              {hasDownloadLink && (
                <a className="button button--secondary" href={project.downloadUrl} target="_blank" rel="noreferrer">
                  Download assets
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {project.media && <MediaGallery media={project.media} />}

      <section className="project-details">
        <div className="container project-details__grid">
          <div>
            <p className="eyebrow">Overview</p>
            <h2>Project story</h2>
            <p>{project.description}</p>
          </div>

          {hasTeam && (
            <div>
              <p className="eyebrow">Team</p>
              <ul className="team-list">
                {project.team.map((member) => (
                  <li key={`${member.name}-${member.role}`}>
                    <strong>{member.name}</strong>
                    <span>{member.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="related-projects">
        <div className="container">
          <div className="section-header section-header--compact">
            <div>
              <p className="eyebrow">Continue exploring</p>
              <h2>More projects</h2>
            </div>
          </div>

          <div className="next-projects">
            <Link to={`/projects/${previousProject.id}`} className="related-link">
              <span>Previous</span>
              <strong>{previousProject.title}</strong>
            </Link>
            <Link to={`/projects/${nextProject.id}`} className="related-link">
              <span>Next</span>
              <strong>{nextProject.title}</strong>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectPage;
