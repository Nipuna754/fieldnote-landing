import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./Button.module.css";

/** "highlight" is the amber button, only for use on the dark spruce band. */
type Variant = "primary" | "secondary" | "quiet" | "highlight";
type Size = "m" | "l";

type Common = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkRest = { href: string } & Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "href" | "className" | "children"
>;
type ButtonRest = { href?: undefined } & Omit<
  ComponentPropsWithoutRef<"button">,
  "className" | "children"
>;

export type ButtonProps = Common & (LinkRest | ButtonRest);

/** A button, or a link styled as a button when `href` is given. */
export function Button({
  variant = "primary",
  size = "m",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  if (typeof rest.href === "string") {
    return (
      <Link className={classes} {...(rest as LinkRest)}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonRest } = rest as ButtonRest;
  return (
    <button className={classes} type={type} {...buttonRest}>
      {children}
    </button>
  );
}
