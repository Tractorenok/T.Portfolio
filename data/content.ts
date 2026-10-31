// Единый источник контента сайта — удобно редактировать в одном месте.

export const profile = {
  name: "Костя Тракторёнок",
  role: "Frontend-разработчик",
  location: "Самара, Россия",
  tagline: "Собираю понятные, быстрые и доступные интерфейсы.",
  pitch:
    "Верстаю на HTML, CSS и JavaScript, работаю с React и Next.js. Довожу проекты до боевого деплоя на Vercel, а не бросаю на половине.",
  email: "kostytractorenok@gmail.com",
  telegram: "SexYTractorenok",
  github: "Tractorenok",
};

export const about = [
  "Начинающий frontend-разработчик из Самары. Учусь через практику — собираю реальные проекты и довожу их до продакшена, а не коплю сертификаты курсов.",
  "Пишу чистую семантическую вёрстку и думаю об адаптиве и доступности (A11Y) с первой строки: клавиатурная навигация, разумная анимация, контраст.",
  "Сейчас углубляюсь в React, TypeScript и работу с API. Открыт к стажировкам и junior-позициям, беру и небольшие заказы.",
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Вёрстка",
    items: ["HTML5, семантика", "CSS: Flexbox, Grid", "Адаптив, mobile-first", "Доступность (A11Y)"],
  },
  {
    title: "JavaScript",
    items: ["ES6+", "Работа с DOM и событиями", "Асинхронность, fetch", "Модули"],
  },
  {
    title: "React / Next.js",
    items: ["Компоненты и пропсы", "Состояние, хуки", "Next.js App Router", "Маршрутизация"],
  },
  {
    title: "Инструменты",
    items: ["Git и GitHub", "Vercel (деплой)", "VS Code", "Figma (базово)"],
  },
];

export const learning = ["TypeScript", "React (глубже)", "Работа с REST API", "Тестирование"];

export type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  live: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Tractor — фриланс-лендинг",
    tag: "Flagship",
    description:
      "Лендинг frontend-услуг с интерактивным калькулятором проекта «Project Scanner»: 7 шагов с прогресс-баром и живым «паспортом проекта», который собирает ответы до отправки заявки.",
    stack: ["Next.js", "React", "TypeScript", "next/image"],
    live: "https://tractor-frontend-delta.vercel.app/",
    featured: true,
  },
  {
    title: "RoadMAP — портфолио",
    tag: "Вёрстка + A11Y",
    description:
      "Одностраничное портфолио в журнальном стиле с нумерованными секциями (§01–§05). Упор на доступность: клавиатурная навигация и поддержка prefers-reduced-motion.",
    stack: ["HTML", "CSS", "JavaScript", "A11Y"],
    live: "https://portfolio-chi-one-yxmeuio309.vercel.app/",
  },
  {
    title: "FRONTEND.LOG — портфолио",
    tag: "Чистый стек",
    description:
      "Портфолио в терминальном стиле со слайдовой навигацией, счётчиком секций и статус-индикаторами. Собрано без фреймворков — чистые HTML, CSS и JS.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://road-map-five.vercel.app/",
  },
];

export type Service = {
  title: string;
  price: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Лендинг",
    price: "от 15 000 ₽",
    description: "Одностраничный сайт: адаптив, анимация, быстрый деплой.",
  },
  {
    title: "Многостраничный сайт",
    price: "от 30 000 ₽",
    description: "Несколько экранов, единый дизайн-система и навигация.",
  },
  {
    title: "Интерфейс на React",
    price: "от 40 000 ₽",
    description: "Компонентный интерфейс на React / Next.js с состоянием.",
  },
  {
    title: "Аудит и доработка",
    price: "от 5 000 ₽",
    description: "Адаптив, доступность и UX существующего фронтенда.",
  },
];

export const navLinks = [
  { href: "#about", label: "Обо мне" },
  { href: "#skills", label: "Навыки" },
  { href: "#projects", label: "Проекты" },
  { href: "#services", label: "Услуги" },
  { href: "#contact", label: "Контакты" },
];
