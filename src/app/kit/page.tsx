import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "@/components/Accordion/Accordion";
import { Badge } from "@/components/Badge/Badge";
import { Button } from "@/components/Button/Button";
import { DecisionLog } from "@/components/DecisionLog/DecisionLog";
import { Panel } from "@/components/Panel/Panel";
import { TextField } from "@/components/TextField/TextField";
import { exampleDecisions } from "@/content/decisions";
import styles from "./kit.module.css";

export const metadata: Metadata = { title: "UI kit" };

const questions = [
  {
    question: "Who can see a decision?",
    answer: <p>Everyone in the workspace, unless the log is marked private.</p>,
  },
  {
    question: "Can a decision be changed later?",
    answer: (
      <p>
        Yes. Record a new decision and link it to the old one. The old entry
        stays in the log, marked as replaced, so the history is never lost.
      </p>
    ),
  },
  {
    question: "Does it work with Slack?",
    answer: <p>Type /decide in any channel to add an entry without leaving Slack.</p>,
  },
];

export default function KitPage() {
  return (
    <main id="main" className={`container ${styles.page}`}>
      <header className={styles.intro}>
        <h1>UI kit</h1>
        <p>
          Every component used on the Fieldnote landing page, built from the{" "}
          <Link href="/tokens">design tokens</Link>. Press Tab to see the focus ring
          on anything you can use with a keyboard.
        </p>
      </header>

      <section className={styles.block} aria-labelledby="buttons">
        <h2 id="buttons">Buttons</h2>
        <p className={styles.note}>
          Primary for the one main action on a screen, secondary for the
          alternative, quiet for low-priority links. Both sizes are at least
          44px tall.
        </p>
        <div className={styles.row}>
          <Button>Start your log</Button>
          <Button variant="secondary">See pricing</Button>
          <Button variant="quiet">Read the guide</Button>
          <Button disabled>Saving</Button>
        </div>
        <div className={styles.row}>
          <Button size="l">Start your log</Button>
          <Button size="l" variant="secondary">
            See pricing
          </Button>
        </div>
      </section>

      <section className={styles.block} aria-labelledby="badges">
        <h2 id="badges">Badges</h2>
        <p className={styles.note}>
          Decision status. The word carries the meaning, so colour is never
          the only signal.
        </p>
        <div className={styles.row}>
          <Badge tone="decided">Decided</Badge>
          <Badge tone="open">Open</Badge>
          <Badge tone="superseded">Replaced</Badge>
        </div>
      </section>

      <section className={styles.block} aria-labelledby="fields">
        <h2 id="fields">Text fields</h2>
        <p className={styles.note}>
          Labels sit above the field. Hints and errors are read out by screen
          readers with the field.
        </p>
        <div className={styles.fields}>
          <TextField id="kit-name" label="Team name" placeholder="Design team" />
          <TextField
            id="kit-email"
            label="Work email"
            type="email"
            hint="We send one email to confirm. No newsletters."
          />
          <TextField
            id="kit-email-error"
            label="Work email"
            type="email"
            defaultValue="amara@"
            error="Enter a full email address, like amara@company.com."
          />
        </div>
      </section>

      <section className={styles.block} aria-labelledby="panels">
        <h2 id="panels">Panel</h2>
        <p className={styles.note}>
          A bordered surface for grouped content. The page uses borders
          instead of shadows.
        </p>
        <Panel className={styles.panelDemo}>
          <p className={styles.panelTitle}>Team plan</p>
          <p>Unlimited decisions, search across every log, and Slack.</p>
        </Panel>
      </section>

      <section className={styles.block} aria-labelledby="accordion">
        <h2 id="accordion">Accordion</h2>
        <p className={styles.note}>
          Built on native details and summary, so it opens with Enter or Space
          and still works if JavaScript fails.
        </p>
        <Accordion items={questions} />
      </section>

      <section className={styles.block} aria-labelledby="log">
        <h2 id="log">Decision log</h2>
        <p className={styles.note}>
          The signature element, used in the hero. Entries write in one by one
          when the page loads. Visitors who turn off motion see them straight
          away.
        </p>
        <div className={styles.logDemo}>
          <DecisionLog entries={exampleDecisions} animate label="Example decision log" />
        </div>
      </section>

      <section className={styles.block} aria-labelledby="chrome">
        <h2 id="chrome">Navigation and footer</h2>
        <p className={styles.note}>
          The navigation at the top of this page and the footer at the bottom
          are part of the kit. Narrow the window to see the menu collapse.
        </p>
      </section>
    </main>
  );
}
