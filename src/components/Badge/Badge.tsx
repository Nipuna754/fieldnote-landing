import type { ReactNode } from "react";
import styles from "./Badge.module.css";

export type BadgeTone = "decided" | "open" | "superseded";

/** Short status label. Colour is never the only signal: the text says the status. */
export function Badge({
  tone = "open",
  children,
}: {
  tone?: BadgeTone;
  children: ReactNode;
}) {
  return <span className={`${styles.badge} ${styles[tone]}`}>{children}</span>;
}
