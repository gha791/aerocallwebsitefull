import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">The Future of Business Communication</h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Connectify provides a seamless, unified communication platform to keep your business connected, no matter where you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
        <Image
          src="https://picsum.photos/seed/hero/600/400"
          alt="Hero Image"
          width={600}
          height={400}
          className="rounded-xl shadow-2xl"
          data-ai-hint="communication technology"
        />
      </div>
    </section>
  );
}
