import { Button } from "../Button/Button";
import styles from "./FinalCta.module.css";

/* Closing call to action. A waitlist form can replace the button later. */
export function FinalCta() {
  return (
    <section id="start" className={styles.cta} aria-labelledby="start-title">
      <div className={`container ${styles.inner}`}>
        <h2 id="start-title" className={styles.title}>
          Start your team&rsquo;s log today.
        </h2>
        <p className={styles.text}>
          Setting up takes two minutes. Invite your team when you&rsquo;re ready.
        </p>
        <Button href="/signup" variant="highlight" size="l">
          Start your log
        </Button>
      </div>
    </section>
  );
}
