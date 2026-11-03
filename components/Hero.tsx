import { profile, facts } from "@/data/content";
import TelegramButton from "./TelegramButton";

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <p className="status-chip">
        <span className="status-dot" aria-hidden="true" />
        <b>Доступен</b> · junior · удалёнка
      </p>
      <h1 id="hero-title">
        Собираю интерфейсы на React — и довожу их до{" "}
        <span className="accent">боевого деплоя</span>.
      </h1>
      <p className="hero-pitch">{profile.pitch}</p>
      <div className="hero-actions">
        <TelegramButton lg />
        <a href="#projects" className="btn btn-ghost btn-lg">
          Проекты →
        </a>
      </div>
      <ul className="status-strip" aria-label="Коротко о стеке">
        {facts.map((fact) => (
          <li className="fact" key={fact}>
            {fact}
          </li>
        ))}
      </ul>
    </section>
  );
}
