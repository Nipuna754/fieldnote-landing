import type { CSSProperties, ReactNode } from "react";
import styles from "./Section.module.css";

type Props = {
  id?: string;
  title?: string;
  intro?: ReactNode;
  tone?: "paper" | "surface";
  /** "split": heading on the left, content on the right (wide screens only). */
  layout?: "stacked" | "split";
  children: ReactNode;
};

/** Page section with consistent spacing. The heading labels the region. */
export function Section({
  id,
  title,
  intro,
  tone = "paper",
  layout = "stacked",
  children,
}: Props) {
  const headingId = id && title ? `${id}-title` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`${styles.section} ${styles[tone]}`}
    >
      <div className={`container ${layout === "split" ? styles.split : ""}`}>
        {title && (
          <header className={styles.head}>
            <h2 id={headingId} className={styles.title}>
              {title}
            </h2>
            {intro && (
              <p className={styles.intro} data-reveal style={{ "--i": 1 } as CSSProperties}>
                {intro}
              </p>
            )}
          </header>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}
