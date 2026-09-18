"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ActiveNavigation({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      let active = "";
      for (const [section, link] of [["about", "about"], ["projects", "projects"], ["experience", "journey"], ["journey", "journey"], ["contact", "contact"]]) {
        if ((document.getElementById(section)?.getBoundingClientRect().top ?? Infinity) <= 150) active = link;
      }
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active = "contact";
      ref.current?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
        if (link.hash === `#${active}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return <div className="nav-links" ref={ref}>{children}</div>;
}
