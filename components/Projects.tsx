import Reveal from "./Reveal";
import { projects } from "@/data/content";

function host(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

export default function Projects() {
  return (
    <section id="projects" className="section container" aria-labelledby="projects-title">
      <div className="section-head">
        <h2 id="projects-title" className="section-title">
          Задеплоено и работает
        </h2>
        <p className="section-lead">
          Каждый проект — живой: можно открыть и потыкать прямо сейчас.
        </p>
      </div>
      <div className="monitors">
        {projects.map((project) => (
          <Reveal
            as="article"
            key={project.title}
            className={`monitor${project.featured ? " featured" : ""}`}
          >
            <div className="monitor-main">
              <div className="monitor-meta">
                <span className="dot" aria-hidden="true" />
                <span className="live-label">LIVE</span>
                <span className="endpoint">{host(project.live)}</span>
                {project.featured && <span className="flag">FLAGSHIP</span>}
              </div>
              <h3>{project.title}</h3>
              <p className="monitor-summary">{project.summary}</p>
              <dl className="case">
                <div>
                  <dt>Задача</dt>
                  <dd>{project.problem}</dd>
                </div>
                <div>
                  <dt>Решение</dt>
                  <dd>{project.solution}</dd>
                </div>
                <div>
                  <dt>Научился</dt>
                  <dd>{project.learned}</dd>
                </div>
              </dl>
              <div className="monitor-stack">
                {project.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <aside className="monitor-aside">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="monitor-preview"
                aria-label={`Открыть ${project.title} в новой вкладке`}
              >
                {project.preview ? (
                  <img
                    src={project.preview}
                    alt={`Превью проекта ${project.title}`}
                    width={680}
                    height={425}
                    loading="lazy"
                  />
                ) : (
                  <span className="preview-fallback" aria-hidden="true">
                    <span className="pf-note">живой сайт</span>
                  </span>
                )}
                <span className="preview-cta">Открыть ↗</span>
              </a>
            </aside>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
