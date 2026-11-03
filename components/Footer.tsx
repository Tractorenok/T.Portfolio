import { profile } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {year} {profile.name}
        </span>
        <span>Next.js · Vercel · собрано вручную</span>
      </div>
    </footer>
  );
}
