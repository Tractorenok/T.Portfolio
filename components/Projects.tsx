import Reveal from "./Reveal";
import { projects, profile } from "@/data/content";

export default function Projects() {
  return (
    <section id="projects" className="section container" aria-labelledby="projects-title">
      <div className="section-head">
        <span className="section-index">03</span>
        <h2 id="projects-title" className="section-title">
          Проекты
        </h2>
        <p className="section-lead">
          Всё задеплоено и работает — можно открыть и потыкать прямо сейчас.
        </p>
      </div>
      <div className="projects-list">
        {projects.map((project) => (
          <Reveal as="div" key={project.title}>
            <article className={`project ${project.featured ? "featured" : ""}`}>
              <div>
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Открыть сайт ↗
                </a>
                <a
                  href={`https://github.com/${profile.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Код на GitHub
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
