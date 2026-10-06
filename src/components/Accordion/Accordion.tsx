import type { ReactNode } from "react";
import styles from "./Accordion.module.css";

export type AccordionItem = { question: string; answer: ReactNode };

/**
 * Question-and-answer list built on native <details>/<summary>,
 * so it opens with Enter or Space and works without JavaScript.
 */
export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className={styles.accordion}>
      {items.map((item) => (
        <details key={item.question} className={styles.item}>
          <summary className={styles.summary}>
            <span>{item.question}</span>
            <span className={styles.icon} aria-hidden="true" />
          </summary>
          <div className={styles.answer}>{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
