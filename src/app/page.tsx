import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { HowItWorks } from '@/components/landing/how-it-works';
import { WhyConnectify } from '@/components/landing/why-connectify';
import { Testimonials } from '@/components/landing/testimonials';
import { Cta } from '@/components/landing/cta';
import { HeroImage } from '@/components/landing/hero-image';
import { TrustedBy } from '@/components/landing/trusted-by';
import { Pricing } from '@/components/landing/pricing';

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <HeroImage />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Pricing />
      <WhyConnectify />
      <Testimonials />
      <Cta />
    </main>
  );
}
