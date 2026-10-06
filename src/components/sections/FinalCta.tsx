import type { CSSProperties } from "react";
import { Button } from "../Button/Button";
import styles from "./FinalCta.module.css";

/* Closing call to action. A waitlist form can replace the button later. */
export function FinalCta() {
  return (
    <section id="start" className={styles.cta} aria-labelledby="start-title">
      <div className={`container ${styles.inner}`}>
        <h2 id="start-title" className={styles.title} data-reveal>
          Start your team&rsquo;s log today.
        </h2>
        <p className={styles.text} data-reveal style={{ "--i": 1 } as CSSProperties}>
          Setting up takes two minutes. Invite your team when you&rsquo;re ready.
        </p>
        <div data-reveal style={{ "--i": 2 } as CSSProperties}>
          <Button href="/signup" variant="highlight" size="l">
            Start your log
          </Button>
        </div>
      </div>
    </section>
  );
}
