import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="py-4 px-4 md:px-6 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex gap-6">
          <a href="#features" className="text-sm font-medium hover:underline underline-offset-4">Features</a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">Pricing</a>
          <a href="#" className="text-sm font-medium hover:underline underline-offset-4">Contact</a>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  );
}
