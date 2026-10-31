import Reveal from "./Reveal";
import { skills, learning } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="section container" aria-labelledby="skills-title">
      <div className="section-head">
        <span className="section-index">02</span>
        <h2 id="skills-title" className="section-title">
          Навыки
        </h2>
        <p className="section-lead">
          Без процентных шкал — только то, чем реально пользуюсь в проектах.
        </p>
      </div>
      <Reveal>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="learning">
          <span className="learning-label">изучаю →</span>
          {learning.map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
