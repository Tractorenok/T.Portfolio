import { profile } from "@/data/content";
import TelegramButton from "./TelegramButton";

const badges = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Git", "A11Y"];

const headingSegments = [
  { text: "Привет, я Костя. Собираю " },
  { text: "понятные и доступные", accent: true },
  { text: " интерфейсы." },
];

/**
 * Заголовок, разбитый на буквы: каждая всплывает из translateY+blur
 * с задержкой --i × 45мс (анимация в globals.css). Для скринридера —
 * aria-label с целым текстом, буквы aria-hidden.
 */
function SplitHeading() {
  const full = headingSegments.map((s) => s.text).join("");
  const chars: { ch: string; accent: boolean }[] = [];
  headingSegments.forEach((seg) => {
    Array.from(seg.text).forEach((ch) => chars.push({ ch, accent: !!seg.accent }));
  });

  let idx = 0;
  let wordKey = 0;
  const nodes: React.ReactNode[] = [];
  let current: React.ReactNode[] = [];

  const flush = () => {
    if (current.length) {
      nodes.push(
        <span className="word" key={`w-${wordKey++}`}>
          {current}
        </span>
      );
      current = [];
    }
  };

  chars.forEach((c, k) => {
    if (c.ch === " ") {
      flush();
      nodes.push(
        <span key={`sp-${k}`} className="char-space" aria-hidden="true">
          {" "}
        </span>
      );
      return;
    }
    const i = idx++;
    current.push(
      <span
        key={`c-${k}`}
        aria-hidden="true"
        className={`char${c.accent ? " accent" : ""}`}
        style={{ ["--i"]: i } as React.CSSProperties}
      >
        {c.ch}
      </span>
    );
  });
  flush();

  return (
    <span className="split" aria-label={full}>
      {nodes}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <p className="hero-eyebrow">
        <span className="hero-dot" aria-hidden="true" />
        {profile.role} · React, JavaScript · удалёнка · открыт к работе
      </p>
      <h1 id="hero-title">
        <SplitHeading />
      </h1>
      <p className="hero-pitch">{profile.pitch}</p>
      <div className="hero-actions">
        <TelegramButton />
        <a href="#projects" className="btn btn-ghost">
          Смотреть проекты
        </a>
      </div>
      <div className="hero-badges" aria-label="Стек технологий">
        {badges.map((b) => (
          <span key={b} className="chip">
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
