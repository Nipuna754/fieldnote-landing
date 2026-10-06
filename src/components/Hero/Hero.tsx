import { Button } from "../Button/Button";
import { DecisionLog } from "../DecisionLog/DecisionLog";
import { exampleDecisions } from "@/content/decisions";
import styles from "./Hero.module.css";

/**
 * Landing page hero. The headline runs wide; below it, the copy and button sit
 * beside the product itself: a decision log that writes in on page load.
 */
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`container ${styles.inner}`}>
        <h1 id="hero-title" className={styles.title}>
          Know what was decided, by whom, and why.
        </h1>

        <div className={styles.pitch}>
          <p className={styles.lede}>
            Fieldnote keeps one shared log of your team&rsquo;s decisions, so
            nobody digs through old chats to find out what was agreed.
          </p>
          <Button href="/signup" size="l">
            Start your log
          </Button>
          <p className={styles.small}>Free for teams of up to 10. No card needed.</p>
        </div>

        <figure className={styles.product}>
          <DecisionLog
            entries={exampleDecisions}
            animate
            label="Example decision log for a product team"
          />
          <figcaption className={styles.caption}>
            An example log. The people and decisions are made up.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
