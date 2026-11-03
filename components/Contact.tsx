import Reveal from "./Reveal";
import TelegramButton from "./TelegramButton";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="section container" aria-labelledby="contact-title">
      <Reveal className="contact-card">
        <p className="contact-status">
          <span className="status-dot" aria-hidden="true" />
          status: доступен для junior-позиции
        </p>
        <h2 id="contact-title">Нужен фронтендер, который доводит до прода?</h2>
        <p>
          Ищу junior-позицию на удалёнке, открыт и к разовым задачам. Отвечаю быстро —
          пишите, куда удобнее.
        </p>
        <div className="contact-links">
          <TelegramButton lg />
          <a href={`mailto:${profile.email}`} className="btn btn-ghost btn-lg">
            {profile.email}
          </a>
          <a
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-lg"
          >
            GitHub ↗
          </a>
        </div>
      </Reveal>
    </section>
  );
}
