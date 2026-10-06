import type { Decision } from "@/components/DecisionLog/DecisionLog";

/** Example decisions shown in the hero and on /kit. Names and events are made up. */
export const exampleDecisions: Decision[] = [
  {
    date: "2026-09-30",
    dateLabel: "30 Sep",
    title: "Ship the mobile app in spring",
    who: "Amara and Tom, product sync",
    why: "Two beta teams need offline notes first. Spring gives us time to build them properly.",
    status: "decided",
  },
  {
    date: "2026-09-24",
    dateLabel: "24 Sep",
    title: "Move standups to async video",
    who: "Whole team, retro",
    why: "We span eight time zones. A live call meant someone was always up at 6 a.m.",
    status: "decided",
  },
  {
    date: "2026-09-17",
    dateLabel: "17 Sep",
    title: "Pricing for teams over 50 seats",
    who: "Priya, owner",
    why: "Waiting on usage numbers from the October cohort.",
    status: "open",
  },
  {
    date: "2026-08-02",
    dateLabel: "2 Aug",
    title: "One Slack channel per project",
    who: "Tom, ops",
    why: "Replaced by the async video decision on 24 September.",
    status: "superseded",
  },
];
