type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "li";
};

/**
 * Лёгкое появление секции снизу вверх — чистым CSS (см. .reveal в globals.css).
 * Без JS и без зависимости от гидрации, поэтому контент виден всегда.
 * prefers-reduced-motion отключает анимацию.
 */
export default function Reveal({ children, className = "", as = "div" }: RevealProps) {
  const Tag = as;
  return <Tag className={`reveal ${className}`.trim()}>{children}</Tag>;
}
