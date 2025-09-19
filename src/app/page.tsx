
import { Cta } from "@/components/landing/cta";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { HeroImage } from "@/components/landing/hero-image";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { Testimonials } from "@/components/landing/testimonials";
import { TrustedBy } from "@/components/landing/trusted-by";
import { WhyConnectify } from "@/components/landing/why-connectify";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <HeroImage />
      <TrustedBy />
      <Features />
      <WhyConnectify />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Cta />
    </main>
  );
}
