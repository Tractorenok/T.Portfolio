import Reveal from "./Reveal";
import { about, profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section container" aria-labelledby="about-title">
      <div className="section-head">
        <span className="section-index">01</span>
        <h2 id="about-title" className="section-title">
          Обо мне
        </h2>
      </div>
      <Reveal>
        <div className="about-grid">
          <div className="about-text">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="about-card">
            <h3>Коротко</h3>
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
                <dd>Офис · удалёнка · фриланс</dd>
              </div>
              <div className="row">
                <dt>Статус</dt>
                <dd>Открыт к предложениям</dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
