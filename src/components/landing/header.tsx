
"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { href: "/#features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="py-4 px-4 md:px-6 sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map(link => (
                <Link key={link.label} href={link.href} className="text-sm font-medium hover:underline underline-offset-4">{link.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
              <Button asChild><Link href="/signup">Get Started</Link></Button>
              <Button variant="outline" asChild className="hidden md:flex"><Link href="/login">Log In</Link></Button>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="flex flex-col gap-6 pt-12">
                        <Logo />
                        <nav className="flex flex-col gap-4">
                            {navLinks.map(link => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-lg font-medium hover:underline underline-offset-4"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                             <Link
                                href="/login"
                                className="text-lg font-medium hover:underline underline-offset-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Log In
                            </Link>
                        </nav>
                    </div>
                </SheetContent>
              </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
