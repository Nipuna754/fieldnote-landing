import { Accordion } from "../Accordion/Accordion";
import { Section } from "../Section/Section";

const questions = [
  {
    question: "Who can see a decision?",
    answer: <p>Everyone in your workspace, unless the log is marked private.</p>,
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
  {
    question: "What happens when we pass 10 people on Free?",
    answer: (
      <p>
        Nothing breaks. We ask you to choose a plan, and your log stays
        readable either way.
      </p>
    ),
  },
  {
    question: "Can we take our data with us?",
    answer: <p>Yes. Export the whole log as CSV or Markdown at any time, on every plan.</p>,
  },
];

export function Questions() {
  return (
    <Section id="questions" title="Questions" layout="split">
      <Accordion items={questions} />
    </Section>
  );
}
