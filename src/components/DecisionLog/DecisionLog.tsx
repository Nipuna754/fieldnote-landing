import type { CSSProperties } from "react";
import { Badge, type BadgeTone } from "../Badge/Badge";
import styles from "./DecisionLog.module.css";

export type Decision = {
  /** ISO date for the <time> element, e.g. "2026-09-30" */
  date: string;
  /** Short date shown on the rail, e.g. "30 Sep" */
  dateLabel: string;
  title: string;
  who: string;
  why: string;
  status: BadgeTone;
};

const statusLabel: Record<BadgeTone, string> = {
  decided: "Decided",
  open: "Open",
  superseded: "Replaced",
};

/**
 * The product's signature element: decisions on a dated rail.
 * With `animate`, entries write in one by one on page load (off for reduced motion).
 */
export function DecisionLog({
  entries,
  animate = false,
  label = "Decision log",
}: {
  entries: Decision[];
  animate?: boolean;
  label?: string;
}) {
  return (
    <ol
      className={[styles.log, animate && styles.animate].filter(Boolean).join(" ")}
      aria-label={label}
    >
      {entries.map((entry, index) => (
        <li
          key={entry.title}
          className={styles.entry}
          data-status={entry.status}
          style={{ "--i": index } as CSSProperties}
        >
          <time dateTime={entry.date} className={styles.date}>
            {entry.dateLabel}
          </time>
          <div className={styles.body}>
            <div className={styles.top}>
              <p className={styles.title}>{entry.title}</p>
              <span className={styles.stamp}>
                <Badge tone={entry.status}>{statusLabel[entry.status]}</Badge>
              </span>
            </div>
            <p className={styles.who}>{entry.who}</p>
            <p className={styles.why}>{entry.why}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
