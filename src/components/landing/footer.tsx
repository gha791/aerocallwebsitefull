import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="py-8 px-4 md:px-6 bg-secondary">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo />
        <p className="text-sm text-muted-foreground">&copy; 2024 Connectify. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-sm hover:underline underline-offset-4">Privacy Policy</a>
          <a href="#" className="text-sm hover:underline underline-offset-4">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
