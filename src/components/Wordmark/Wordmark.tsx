import styles from "./Wordmark.module.css";

/** Fieldnote logo: a spruce card with an amber tab, plus the name. */
export function Wordmark() {
  return (
    <span className={styles.wordmark}>
      <svg
        className={styles.mark}
        viewBox="0 0 24 24"
        width="24"
        height="24"
        aria-hidden="true"
        focusable="false"
      >
        <rect x="2" y="3" width="20" height="18" rx="3" fill="var(--color-spruce)" />
        <rect x="6" y="3" width="5" height="9" fill="var(--color-amber)" />
        <rect x="6" y="15" width="12" height="2" rx="1" fill="var(--color-paper)" />
      </svg>
      <span>Fieldnote</span>
    </span>
  );
}
