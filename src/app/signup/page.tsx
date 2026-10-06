import type { Metadata } from "next";
import { Button } from "@/components/Button/Button";
import styles from "./signup.module.css";

export const metadata: Metadata = {
  title: "Start your log",
  robots: { index: false },
};

/* Every "Start" button lands here. This is where a waitlist form can go later. */
export default function SignupPage() {
  return (
    <main id="main" className={`container ${styles.page}`}>
      <h1 className={styles.title}>Sign-up isn&rsquo;t open.</h1>
      <p>
        Fieldnote is a portfolio project, so there&rsquo;s no account to
        create yet. Thanks for clicking through.
      </p>
      <Button href="/" variant="secondary">
        Back to the home page
      </Button>
    </main>
  );
}
