import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";
import { Section } from "../Section/Section";
import styles from "./Pricing.module.css";

type Tier = {
  name: string;
  price: string;
  per: string;
  for: string;
  features: string[];
  cta: string;
  recommended?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Free",
    price: "$0",
    per: "for up to 10 people",
    for: "For a small team trying it out.",
    features: ["Unlimited decisions", "One shared log", "Slack and browser", "Export any time"],
    cta: "Start free",
  },
  {
    name: "Team",
    price: "$6",
    per: "per person, per month",
    for: "For teams making decisions across several projects.",
    features: [
      "Everything in Free",
      "One log per project, no limit",
      "Search across every log",
      "Private logs",
    ],
    cta: "Try Team free for 14 days",
    recommended: true,
  },
  {
    name: "Organisation",
    price: "Custom",
    per: "for 50 people or more",
    for: "For companies that need control and audits.",
    features: ["Everything in Team", "Single sign-on", "Audit history export", "A named contact"],
    cta: "Talk to us",
  },
];

function Check() {
  return (
    <svg className={styles.check} viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false">
      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pricing() {
  return (
    <Section
      id="pricing"
      title="Pricing"
      intro="Prices in US dollars. Billed monthly, cancel any time."
    >
      <ul className={styles.tiers}>
        {tiers.map((tier) => (
          <li
            key={tier.name}
            className={[styles.tier, tier.recommended && styles.recommended].filter(Boolean).join(" ")}
          >
            <div className={styles.head}>
              <h3 className={styles.name}>{tier.name}</h3>
              {tier.recommended && <Badge tone="decided">Most teams pick this</Badge>}
            </div>
            <p className={styles.price}>
              <span className={styles.amount}>{tier.price}</span>
              <span className={styles.per}>{tier.per}</span>
            </p>
            <p className={styles.for}>{tier.for}</p>
            <ul className={styles.features} aria-label={`${tier.name} plan includes`}>
              {tier.features.map((feature) => (
                <li key={feature}>
                  <Check />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              href="/signup"
              variant={tier.recommended ? "primary" : "secondary"}
              className={styles.cta}
            >
              {tier.cta}
            </Button>
          </li>
        ))}
      </ul>
    </Section>
  );
}
