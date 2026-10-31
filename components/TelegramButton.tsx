import { profile } from "@/data/content";

/**
 * Капсульная кнопка-ссылка на Telegram с пробегающим бликом.
 * Анимация блика и свечение — чистым CSS (.btn-tg в globals.css),
 * свечение только на hover-устройствах, блик выключается при reduced-motion.
 */
export default function TelegramButton({
  label = "Написать в Telegram",
}: {
  label?: string;
}) {
  return (
    <a
      href={`https://t.me/${profile.telegram}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-tg"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.9 4.27 18.7 19.4c-.24 1.06-.87 1.32-1.77.82l-4.9-3.6-2.36 2.27c-.26.26-.48.48-.98.48l.35-4.96 9.03-8.16c.39-.35-.09-.55-.6-.2L6.32 12.9l-4.8-1.5c-1.04-.33-1.06-1.04.22-1.54l18.76-7.23c.87-.32 1.63.2 1.4 1.64z" />
      </svg>
      {label}
    </a>
  );
}
