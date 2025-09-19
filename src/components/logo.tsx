import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-primary p-2 rounded-lg">
        <Phone className="text-primary-foreground" />
      </div>
      <h1 className="text-2xl font-bold text-foreground">
        AEROCALL
      </h1>
    </div>
  );
}
