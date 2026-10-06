"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../Button/Button";
import { Wordmark } from "../Wordmark/Wordmark";
import styles from "./SiteNav.module.css";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#questions", label: "Questions" },
];

/** Top navigation. Collapses behind a Menu button on small screens. */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

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
              <li key={link.href}>
                <Link href={link.href} className={styles.link} onClick={close}>
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
