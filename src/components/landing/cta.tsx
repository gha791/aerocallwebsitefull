
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Cta() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto text-center animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to Transform Your Communication?</h2>
        <p className="mt-4 text-muted-foreground md:text-lg max-w-xl mx-auto">
          Join thousands of businesses who trust AEROCALL for their daily operations.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild><Link href="/contact">Sign Up for Free</Link></Button>
        </div>
      </div>
    </section>
  );
}
