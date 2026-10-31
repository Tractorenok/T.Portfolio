import { profile } from "@/data/content";

const badges = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Git", "A11Y"];

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <p className="hero-eyebrow">
        <span className="hero-dot" aria-hidden="true" />
        {profile.role} · {profile.location} · открыт к работе
      </p>
      <h1 id="hero-title">
        Привет, я Костя. Собираю <em>понятные и доступные</em> интерфейсы.
      </h1>
      <p className="hero-pitch">{profile.pitch}</p>
      <div className="hero-actions">
        <a href="#projects" className="btn btn-primary">
          Смотреть проекты
        </a>
        <a href="#contact" className="btn btn-ghost">
          Связаться
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
