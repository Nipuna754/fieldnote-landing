import type { ComponentPropsWithoutRef } from "react";
import styles from "./TextField.module.css";

type Props = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
} & Omit<ComponentPropsWithoutRef<"input">, "id">;

/** Labelled text input. Hint and error are linked to the input for screen readers. */
export function TextField({ id, label, hint, error, ...rest }: Props) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {hint && (
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
      )}
      <input
        id={id}
        className={styles.input}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...rest}
      />
      {error && (
        <p id={errorId} className={styles.error}>
          {error}
        </p>
      )}
    </div>
  );
}
