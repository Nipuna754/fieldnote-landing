"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { Wordmark } from "../Wordmark/Wordmark";
import styles from "./SiteNav.module.css";

const links = [
  { id: "features", label: "Features" },
  { id: "how", label: "How it works" },
  { id: "pricing", label: "Pricing" },
  { id: "questions", label: "Questions" },
];

/**
 * Top navigation. Stays at the top of the screen while scrolling, collapses
 * behind a Menu button on small screens, and on the home page highlights the
 * section currently being read.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();
  const close = () => setOpen(false);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    // A section counts as "current" when it crosses the middle of the screen
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));

    // Above the first section, nothing is highlighted
    const onScroll = () => {
      if (sections[0] && sections[0].getBoundingClientRect().top > window.innerHeight / 2) {
        setActive(null);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      setActive(null);
    };
  }, [pathname]);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Main">
        <Link href="/" className={styles.brand} onClick={close}>
          <Wordmark />
          <span className="visually-hidden">, home</span>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <div id="site-menu" className={styles.menu} data-open={open}>
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={`/#${link.id}`}
                  className={styles.link}
                  data-active={active === link.id || undefined}
                  aria-current={active === link.id ? "true" : undefined}
                  onClick={close}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href="/signup" onClick={close}>
            Start your log
          </Button>
        </div>
      </nav>
    </header>
  );
}
