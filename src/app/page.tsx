import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { Cta } from '@/components/landing/cta';

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <Cta />
    </main>
  );
}
