import Reveal from "./Reveal";
import { timeline } from "@/data/content";

export default function Timeline() {
  return (
    <section id="path" className="section container" aria-labelledby="path-title">
      <div className="section-head">
        <h2 id="path-title" className="section-title">
          Путь по уровню
        </h2>
        <p className="section-lead">
          Не стаж, а траектория: от чистого стека к React, TypeScript и проду.
        </p>
      </div>
      <Reveal>
        <ol className="timeline">
          {timeline.map((m) => (
            <li className="tl-item" key={m.title}>
              <span className="tl-phase">{m.phase}</span>
              <div className="tl-body">
                <h3>{m.title}</h3>
                <p>{m.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
