import { Logo } from "@/components/logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 px-4 md:px-6 bg-secondary">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo />
        <p className="text-sm text-muted-foreground">&copy; 2024 Connectify. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-sm hover:underline underline-offset-4">Privacy Policy</Link>
          <Link href="/terms" className="text-sm hover:underline underline-offset-4">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
