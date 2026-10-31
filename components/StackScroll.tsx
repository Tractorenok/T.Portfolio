"use client";

import { useEffect, useRef } from "react";

/**
 * Эффект «стопки листов»: каждая секция залипает (position: sticky),
 * следующая наезжает сверху, а предыдущая уезжает вверх, уменьшается и темнеет.
 * Через CSS-переменные --stick и --cover, на каждый кадр меняются только transform/opacity.
 * При prefers-reduced-motion — обычная вёрстка без движения и без Lenis.
 */
export default function StackScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sheets = () =>
      Array.from(root.querySelectorAll<HTMLElement>(":scope > [data-sheet]"));

    const tick = () => {
      const list = sheets();
      const vh = window.innerHeight;
      list.forEach((sheet, i) => {
        const next = list[i + 1];
        let cover = 0;
        if (next && !reduced.matches) {
          cover = Math.min(1, Math.max(0, (vh - next.getBoundingClientRect().top) / vh));
        }
        sheet.style.setProperty("--cover", cover.toFixed(3));
      });
    };

    const measure = () => {
      const vh = window.innerHeight;
      for (const sheet of sheets()) {
        sheet.style.setProperty("--stick", `${Math.min(0, vh - sheet.offsetHeight)}px`);
      }
      tick();
    };

    let raf = 0;
    const onScroll = () => {
      if (!raf)
        raf = requestAnimationFrame(() => {
          raf = 0;
          tick();
        });
    };

    const ro = new ResizeObserver(measure);
    sheets().forEach((sheet) => ro.observe(sheet));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    const onMotionChange = () => measure();
    reduced.addEventListener?.("change", onMotionChange);

    let cleanupLenis = () => {};
    if (!reduced.matches) {
      let lenisRaf = 0;
      let destroyed = false;
      import("lenis").then(({ default: Lenis }) => {
        if (destroyed) return;
        const lenis = new Lenis({ lerp: 0.14, wheelMultiplier: 1 });
        const loop = (time: number) => {
          lenis.raf(time);
          lenisRaf = requestAnimationFrame(loop);
        };
        lenisRaf = requestAnimationFrame(loop);
        lenis.on("scroll", tick);
        cleanupLenis = () => {
          lenis.off("scroll", tick);
          lenis.destroy();
          cancelAnimationFrame(lenisRaf);
        };
      });
      const prev = cleanupLenis;
      cleanupLenis = () => {
        destroyed = true;
        cancelAnimationFrame(lenisRaf);
        prev();
      };
    }

    measure();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      reduced.removeEventListener?.("change", onMotionChange);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
      cleanupLenis();
    };
  }, []);

  return (
    <div className="stack" ref={ref}>
      {children}
    </div>
  );
}
