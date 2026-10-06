import Link from "next/link";
import { Wordmark } from "../Wordmark/Wordmark";
import styles from "./SiteFooter.module.css";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#questions", label: "Questions" },
  { href: "/kit", label: "UI kit" },
  { href: "/tokens", label: "Design tokens" },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.about}>
          <Wordmark />
          <p>A shared decision log for remote teams.</p>
        </div>
        <nav aria-label="Footer">
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.note}>
          Fieldnote is a portfolio project, not a real product. © 2026
        </p>
      </div>
    </footer>
  );
}
