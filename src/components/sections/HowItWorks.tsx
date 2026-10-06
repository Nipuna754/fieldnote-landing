import type { CSSProperties } from "react";
import { Section } from "../Section/Section";
import styles from "./HowItWorks.module.css";

/* A real sequence, so numbered steps are the right device here. */
const steps = [
  {
    title: "Ask the question",
    text: "Anyone can open a question in the log and name the person who will decide.",
  },
  {
    title: "Record the decision",
    text: "The owner writes what was decided and why, and tags who was involved.",
  },
  {
    title: "Find it later",
    text: "Months on, search brings back the decision and the reasoning behind it.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how" title="How it works" tone="surface">
      <ol className={styles.steps} role="list">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className={styles.step}
            data-reveal
            style={{ "--i": index } as CSSProperties}
          >
            <span className={styles.number} aria-hidden="true">
              {index + 1}
            </span>
            <h3 className={styles.title}>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
