import type { Metadata } from "next";
import "./globals.css";
import { displayFont, readingFont } from "./fonts";
import { SiteNav } from "@/components/SiteNav/SiteNav";
import { SiteFooter } from "@/components/SiteFooter/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "Fieldnote: a shared decision log for remote teams",
    template: "%s | Fieldnote",
  },
  description:
    "Write down what your team decided, who decided it and why. Find it again in seconds.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${displayFont.variable} ${readingFont.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
