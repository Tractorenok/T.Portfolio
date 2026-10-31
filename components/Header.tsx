import { navLinks, profile } from "@/data/content";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#main" className="brand">
          t.<span>tractorenok</span>
        </a>
        <nav className="nav" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={`https://t.me/${profile.telegram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost header-cta"
        >
          Написать
        </a>
      </div>
    </header>
  );
}
