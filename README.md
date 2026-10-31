# Портфолио — Костя Тракторёнок

Персональный сайт frontend-разработчика. Одна страница: обо мне, навыки, проекты, услуги, контакты.

## Стек

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- Чистый **CSS** (дизайн-токены, адаптив, поддержка `prefers-reduced-motion`)
- `next/font` — Inter + JetBrains Mono

## Запуск локально

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Сборка

```bash
npm run build
npm start
```

## Структура

```
app/
  layout.tsx     # шрифты, метаданные, <html lang="ru">
  page.tsx       # сборка секций
  globals.css    # дизайн-токены и стили
components/       # Header, Hero, About, Skills, Projects, Services, Contact, Footer
data/content.ts  # весь текст и список проектов в одном месте
```

Весь контент редактируется в [`data/content.ts`](data/content.ts).

## Деплой

Залить репозиторий на GitHub и импортировать в [Vercel](https://vercel.com/new) — соберётся автоматически.
