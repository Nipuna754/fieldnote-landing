import { Hero } from "@/components/Hero/Hero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Pricing } from "@/components/sections/Pricing";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Questions } from "@/components/sections/Questions";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <ProofStrip />
      <Features />
      <HowItWorks />
      <Pricing />
      <Questions />
      <FinalCta />
    </main>
  );
}
