import Reveal from "./Reveal";
import { profile } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="section container contact" aria-labelledby="contact-title">
      <Reveal>
        <div className="contact-card">
          <h2 id="contact-title">Давайте работать вместе</h2>
          <p>
            Ищу junior-позицию или стажировку во frontend, открыт и к заказам.
            Отвечаю быстро — пишите, куда удобнее.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              {profile.email}
            </a>
            <a
              href={`https://t.me/${profile.telegram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Telegram
            </a>
            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
