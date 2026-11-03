import { navLinks, profile } from "@/data/content";
import TelegramButton from "./TelegramButton";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#main" className="brand" aria-label={`${profile.name}, на главную`}>
          <span className="status-dot" aria-hidden="true" />
          tractorenok<span style={{ color: "var(--text-mute)" }}>.dev</span>
        </a>
        <nav className="nav" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <TelegramButton label="Написать" />
      </div>
    </header>
  );
}
