import Reveal from "./Reveal";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="section container" aria-labelledby="services-title">
      <div className="section-head">
        <span className="section-index">04</span>
        <h2 id="services-title" className="section-title">
          Услуги
        </h2>
        <p className="section-lead">
          Беру заказы на фрилансе параллельно с поиском работы. Цены — ориентир.
        </p>
      </div>
      <Reveal>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p className="service-price">{service.price}</p>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
