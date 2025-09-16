import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="py-4 px-4 md:px-6 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/#features" className="text-sm font-medium hover:underline underline-offset-4">Features</Link>
          <Link href="/pricing" className="text-sm font-medium hover:underline underline-offset-4">Pricing</Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
        </nav>
        <div className="flex gap-2">
            <Button asChild variant="ghost"><Link href="/login">Log In</Link></Button>
            <Button asChild><Link href="/signup">Get Started</Link></Button>
        </div>
      </div>
    </header>
  );
}
