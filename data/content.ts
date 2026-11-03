// Единый источник контента сайта — удобно редактировать в одном месте.

export const profile = {
  name: "Костя Тракторёнок",
  role: "Junior Frontend-разработчик",
  location: "Жигулёвск",
  year: "2 курс",
  available: true,
  tagline: "Junior, который уже деплоит.",
  pitch:
    "Собираю адаптивные доступные интерфейсы на React и Next.js и довожу их до боевого деплоя на Vercel.",
  email: "kostytractorenok@gmail.com",
  telegram: "SexYTractorenok",
  github: "Tractorenok",
};

// Короткая строка статуса в hero (моноширинный «status strip»).
export const facts = [
  "2 проекта в проде",
  "React · Next.js",
  "deploy · Vercel",
  "A11Y · WCAG 2.2 AA",
];

export const about = [
  "Frontend-разработчик из Жигулёвска, сейчас на 2 курсе. Пишу на HTML, CSS, JavaScript и React, собираю проекты на Next.js и деплою на Vercel — от макета до продакшена сам.",
  "Доступность не опция: семантика, клавиатурная навигация, контраст и аккуратная анимация заложены с первого коммита. Код держу чистым и читаемым.",
  "Сейчас углубляю TypeScript, React и работу с API. Ищу junior-позицию на удалёнке.",
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
    items: ["ES6+", "DOM и события", "Асинхронность, fetch", "Модули"],
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

export const learning = ["TypeScript", "React (глубже)", "REST API", "Тестирование"];

export type Project = {
  title: string;
  tag: string;
  summary: string;
  problem: string;
  solution: string;
  learned: string;
  stack: string[];
  live: string;
  preview?: string;
  featured?: boolean;
};

// Кейсы собраны по тому, что реально показывают живые сайты (по ссылкам ниже).
export const projects: Project[] = [
  {
    title: "TracTor — фриланс-лендинг",
    tag: "Flagship",
    summary: "Лендинг frontend-услуг с интерактивным калькулятором проекта.",
    problem:
      "Превратить сухой прайс в интерактивный опыт, который сам ведёт клиента к заявке.",
    solution:
      "Собрал «Project Scanner»: 7 шагов с прогресс-баром и живым «паспортом проекта», который копит ответы до отправки. Next.js, TypeScript, next/image.",
    learned:
      "Многошаговое состояние, аккуратные переходы и типобезопасные формы на TypeScript.",
    stack: ["Next.js", "React", "TypeScript", "next/image"],
    live: "https://tractor-frontend-delta.vercel.app/",
    featured: true,
  },
  {
    title: "FRONTEND.LOG — терминал-портфолио",
    tag: "Чистый стек",
    summary: "Портфолио в терминальном стиле, собранное без фреймворков.",
    problem: "Проверить себя на чистом стеке — без React, только HTML, CSS и JS.",
    solution:
      "Терминальный интерфейс со слайдовой навигацией, счётчиком секций и статус-индикаторами. Ноль зависимостей.",
    learned:
      "Работа с DOM и событиями напрямую, анимация на чистом CSS/JS, дисциплина без фреймворка.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://road-map-five.vercel.app/",
  },
];

export type Milestone = {
  phase: string;
  title: string;
  note: string;
};

// Честная траектория по уровню, без выдуманных дат — путь 2-курсника, который шипит.
export const timeline: Milestone[] = [
  {
    phase: "сейчас",
    title: "React, TypeScript и работа с API",
    note: "Углубляю типобезопасность и асинхронность. Ищу junior-позицию на удалёнке.",
  },
  {
    phase: "прод",
    title: "TracTor на Next.js + TypeScript",
    note: "Интерактивный калькулятор, многошаговое состояние, боевой деплой на Vercel.",
  },
  {
    phase: "react",
    title: "Переход на компонентный подход",
    note: "Состояние, хуки, App Router — от статичной разметки к приложениям.",
  },
  {
    phase: "основа",
    title: "Чистый стек: HTML, CSS, JavaScript",
    note: "Терминальное портфолио без фреймворков — DOM, события, анимации руками.",
  },
  {
    phase: "старт",
    title: "2 курс: учусь и сразу шиплю",
    note: "Семантика и доступность с самого первого проекта.",
  },
];

export const navLinks = [
  { href: "#about", label: "Обо мне" },
  { href: "#projects", label: "Проекты" },
  { href: "#path", label: "Путь" },
  { href: "#skills", label: "Навыки" },
  { href: "#contact", label: "Контакты" },
];
