import styles from "./ProofStrip.module.css";

/* Plain product facts instead of fake customer logos. */
const items = [
  { title: "Works where you talk", text: "Add decisions from Slack or the browser." },
  { title: "Your log is yours", text: "Export to CSV or Markdown at any time, on every plan." },
  { title: "Built for remote teams", text: "Dates and times show in each reader's own time zone." },
];

export function ProofStrip() {
  return (
    <section className={styles.strip} aria-label="Fieldnote at a glance">
      <ul className={`container ${styles.list}`}>
        {items.map((item) => (
          <li key={item.title} className={styles.item}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
