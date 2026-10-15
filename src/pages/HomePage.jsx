import { useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { categories, projects } from '../data/projects';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch =
        !term ||
        [project.title, project.category, project.description].some((value) =>
          value.toLowerCase().includes(term),
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  useDocumentMeta('Главная', 'Дмитрий Давыдов - портфолио.');

  return (
    <>
      <header className="topbar">
        <div className="container topbar__inner">
          <Link to="/" className="brand" aria-label="Go to homepage">
            Дмитрий Давыдов
          </Link>
          <nav className="main-nav" aria-label="Main navigation">
            <NavLink to="/" end>
              Домой
            </NavLink>
            <a href="#works">Работы</a>
            <a href="#about">Обо мне</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section-spacing">
          <div className="container hero__grid">
            <div>
              <p className="eyebrow">Студиец ШКИ Легко.</p>
              <h1 data-text="">Давыдов Дмитрий.</h1>
            </div>
            <div>
              <p className="intro-copy">
                I build contemporary brand systems, immersive digital stories, and polished web experiences for culture-led projects. This portfolio is a sample of concepts and prototypes shaped for screens, spaces, and motion.
              </p>
              <div className="hero__actions">
                <a className="button button--primary" href="#works">
                  Посмотреть мои проекты
                </a>
                <a className="button button--secondary" href="#about">
                  Про меня
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="works" className="section-spacing">
          <div className="container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2>Projects</h2>
              </div>
              <div className="toolbar">
                <label className="search-field" htmlFor="project-search">
                  <span className="sr-only">Search projects</span>
                  <input
                    id="project-search"
                    type="search"
                    value={searchTerm}
                    placeholder="Search projects"
                    onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </label>
              </div>
            </div>

            <div className="filters" aria-label="Project categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={category === activeCategory ? 'filter is-active' : 'filter'}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="projects-grid">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)
              ) : (
                <div className="empty-state">
                  <h3>No projects match your filters.</h3>
                  <p>Try another keyword or choose a different category.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="about" className="section-spacing about-section">
          <div className="container about-section__inner">
            <div>
              <p className="eyebrow">About</p>
              <h2>Creative direction with a product mindset.</h2>
            </div>
            <p>
              I approach design as a layered story: narrative, motion, interaction, and systems working together. My practice balances expressive visuals with functional clarity so each experience feels both intentional and easy to use.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
