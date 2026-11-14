import { Link } from 'react-router-dom';
import ProjectMediaPreview from './ProjectMediaPreview';

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="project-card" aria-label={`Open project ${project.title}`}>
      <div className="project-card__media">
        <ProjectMediaPreview project={project} alt={project.title} />
      </div>
      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.year}</span>
          <span>{project.category}</span>
        </div>
        <h3 data-text={project.title}>{project.title}</h3>
      </div>
    </Link>
  );
}

export default ProjectCard;
