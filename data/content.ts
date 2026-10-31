// Единый источник контента сайта — удобно редактировать в одном месте.

export const profile = {
  name: "Костя Тракторёнок",
  role: "Junior Frontend-разработчик",
  location: "Жигулёвск",
  tagline: "Собираю понятные, быстрые и доступные интерфейсы.",
  pitch:
    "Делаю адаптивные и доступные интерфейсы на React и Next.js. Довожу проекты от макета до боевого деплоя на Vercel.",
  email: "kostytractorenok@gmail.com",
  telegram: "SexYTractorenok",
  github: "Tractorenok",
};

export const about = [
  "Frontend-разработчик из Жигулёвска. Делаю адаптивные и доступные интерфейсы на HTML, CSS, JavaScript и React, собираю проекты на Next.js и деплою на Vercel.",
  "Доступность — в основе: семантика, клавиатурная навигация, разумная анимация, контраст. Пишу чистый читаемый код и довожу задачи до рабочего результата.",
  "Углубляю React, TypeScript и работу с API. Ищу junior-позицию на удалёнке.",
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

export const navLinks = [
  { href: "#about", label: "Обо мне" },
  { href: "#skills", label: "Навыки" },
  { href: "#projects", label: "Проекты" },
  { href: "#contact", label: "Контакты" },
];
