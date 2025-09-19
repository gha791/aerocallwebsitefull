
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Globe } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-20 md:py-32 lg:py-40 text-center animate-fade-in-up">
      <div className="container mx-auto">
        <Badge variant="secondary" className="py-2 px-4 rounded-full mb-4">
            <Globe className='mr-2 h-4 w-4' />
            Serving USA & Canada with Seamless Connections
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          The Future of Business
          <br className="hidden sm:block" />
          Communication is{' '}
          <span className="text-accent">Crystal Clear</span>
        </h1>
        <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-6">
            Modern cloud calling for ambitious teams. Simple setup, powerful features, and unparalleled reliability. Welcome to AEROCALL.
        </p>
        <div className="flex justify-center mt-8">
            <Button size="lg" asChild><Link href="/contact">Start Free Trial</Link></Button>
        </div>
      </div>
    </section>
  );
}
