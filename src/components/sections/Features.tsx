import { Section } from "../Section/Section";
import styles from "./Features.module.css";

const features = [
  {
    title: "Write it down in a minute",
    text: "Add a decision from the browser, or type /decide in Slack. What was decided, who decided it and why, in one short form.",
  },
  {
    title: "Find it in seconds",
    text: "Search by person, project or date. Results show the reasoning, not just the title.",
  },
  {
    title: "Keep the history",
    text: "When a decision changes, link the new one to the old one. Nothing gets overwritten, so you can always see how you got here.",
  },
  {
    title: "See what's still open",
    text: "Open questions stay at the top of the log with an owner, so they don't quietly stall.",
  },
];

export function Features() {
  return (
    <Section
      id="features"
      title="What Fieldnote does"
      intro="Four jobs, done well. No project boards, no chat, no docs to maintain."
      layout="split"
    >
      <ul className={styles.rows}>
        {features.map((feature) => (
          <li key={feature.title} className={styles.row}>
            <h3 className={styles.title}>{feature.title}</h3>
            <p>{feature.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
