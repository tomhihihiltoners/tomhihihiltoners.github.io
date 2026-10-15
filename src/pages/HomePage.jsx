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
                Нажимай кнопку ниже, чтобы посмотреть мои проекты. Да, может список и коротковат... Но ведь не все же сразу, так?
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
                <p className="eyebrow">Мои работы</p>
                <h2>Проекты</h2>
              </div>
              <div className="toolbar">
                <label className="search-field" htmlFor="project-search">
                  <span className="sr-only">Поиск</span>
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
                  <h3>Такого проекта пока нет.</h3>
                  <p>Попробуй написать иначе.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="about" className="section-spacing about-section">
          <div className="container about-section__inner">
            <div>
              <p className="eyebrow">About</p>
              <h2>Я учусь, но уже делаю серьезные проекты. Подписывайся на телеграмм.</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
