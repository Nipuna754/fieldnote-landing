import type { ReactNode } from "react";
import styles from "./Panel.module.css";

/** Bordered surface for grouped content. Borders, not shadows. */
export function Panel({
  as: Tag = "div",
  className,
  children,
}: {
  as?: "div" | "section" | "article" | "aside";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={[styles.panel, className].filter(Boolean).join(" ")}>
      {children}
    </Tag>
  );
}
