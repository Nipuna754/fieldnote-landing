import type { Metadata } from "next";
import styles from "./page.module.css";

/* Reference page: shows every design token so it can be checked by eye. */

export const metadata: Metadata = { title: "Design tokens" };

const swatches = [
  { name: "ink", hex: "#1B2430", use: "Text" },
  { name: "ink-muted", hex: "#4A5560", use: "Secondary text" },
  { name: "paper", hex: "#F3F5F2", use: "Page" },
  { name: "surface", hex: "#FBFCFA", use: "Panels" },
  { name: "wash", hex: "#E3EBE7", use: "Hover, quiet fills" },
  { name: "spruce", hex: "#0E4A44", use: "Primary, links" },
  { name: "spruce-hover", hex: "#0A3A35", use: "Primary, hover" },
  { name: "amber", hex: "#F2B33D", use: "Decided highlight" },
  { name: "rule", hex: "#C9D1CC", use: "Dividers" },
  { name: "rule-strong", hex: "#7D8A84", use: "Input borders" },
  { name: "brick", hex: "#B3392F", use: "Errors" },
];

const spacing = [
  ["space-1", "4px"],
  ["space-2", "8px"],
  ["space-3", "12px"],
  ["space-4", "16px"],
  ["space-5", "24px"],
  ["space-6", "32px"],
  ["space-7", "48px"],
  ["space-8", "72px"],
  ["space-9", "112px"],
];

export default function TokensPage() {
  return (
    <main id="main" className={`container ${styles.page}`}>
      <header className={styles.intro}>
        <h1>Design tokens</h1>
        <p>
          Colour, type, spacing and shape for Fieldnote. Every value lives in{" "}
          <code>src/styles/tokens.css</code>.
        </p>
      </header>

      <section aria-labelledby="colour">
        <h2 id="colour">Colour</h2>
        <ul className={styles.swatches}>
          {swatches.map((s) => (
            <li key={s.name} className={styles.swatch}>
              <span
                className={styles.chip}
                style={{ background: `var(--color-${s.name})` }}
                aria-hidden="true"
              />
              <span className={styles.swatchName}>{s.name}</span>
              <span className={styles.swatchMeta}>
                {s.hex}. {s.use}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="type">
        <h2 id="type">Type</h2>
        <div className={styles.specimen}>
          <h1>The decision is made</h1>
          <h2>Write it down once</h2>
          <h3>Find it in seconds</h3>
          <h4>Who decided, and why</h4>
          <p>
            Bricolage Grotesque sets the headings and the interface. Literata
            sets the reading text, with more line height than a sans serif
            would need. Lines stay under about 62 characters, so a decision
            written in two sentences reads in two breaths.
          </p>
          <p className={styles.small}>
            Small text, 13px: <a href="#type">a link in the page</a>.
          </p>
        </div>
      </section>

      <section aria-labelledby="space">
        <h2 id="space">Spacing and shape</h2>
        <ul className={styles.spacing}>
          {spacing.map(([name, px]) => (
            <li key={name}>
              <span
                className={styles.bar}
                style={{ width: `var(--${name})` }}
                aria-hidden="true"
              />
              <span className={styles.swatchName}>{name}</span>
              <span className={styles.swatchMeta}>{px}</span>
            </li>
          ))}
        </ul>
        <div className={styles.shapes}>
          <span className={styles.tag}>Tag, 3px</span>
          <span className={styles.control}>Control, 8px</span>
          <span className={styles.panel}>Panel, 14px</span>
        </div>
      </section>
    </main>
  );
}
