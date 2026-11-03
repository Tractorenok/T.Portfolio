import Reveal from "./Reveal";
import { about, profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section container" aria-labelledby="about-title">
      <div className="section-head">
        <h2 id="about-title" className="section-title">
          Кто за консолью
        </h2>
      </div>
      <Reveal className="about-grid">
        <div className="about-text">
          {about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="console-card">
          <div className="bar">
            <span className="status-dot" aria-hidden="true" />
            profile.status
          </div>
          <dl>
            <div className="row">
              <dt>Город</dt>
              <dd>{profile.location}</dd>
            </div>
            <div className="row">
              <dt>Роль</dt>
              <dd>{profile.role}</dd>
            </div>
            <div className="row">
              <dt>Формат</dt>
              <dd>Удалённо</dd>
            </div>
            <div className="row">
              <dt>Статус</dt>
              <dd className="live">
                <span className="status-dot" aria-hidden="true" />
                Открыт к офферам
              </dd>
            </div>
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
