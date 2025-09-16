import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { HowItWorks } from '@/components/landing/how-it-works';
import { WhyConnectify } from '@/components/landing/why-connectify';
import { Testimonials } from '@/components/landing/testimonials';
import { Cta } from '@/components/landing/cta';

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <HowItWorks />
      <WhyConnectify />
      <Testimonials />
      <Cta />
    </main>
  );
}
