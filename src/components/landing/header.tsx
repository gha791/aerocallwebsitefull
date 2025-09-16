import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="py-4 px-4 md:px-6 sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="/#features" className="text-sm font-medium hover:underline underline-offset-4">Features</Link>
            <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">Pricing</Link>
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">About</Link>
          </nav>
          <div className="flex gap-2">
              <Button asChild><Link href="/signup">Get Started</Link></Button>
          </div>
        </div>
      </div>
    </header>
  );
}
