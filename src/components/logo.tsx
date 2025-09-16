import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="bg-sidebar-primary p-2 rounded-lg">
        <Phone className="text-sidebar-primary-foreground" />
      </div>
      <h1 className="text-2xl font-bold text-sidebar-foreground hidden group-data-[collapsible=icon]:hidden">
        Connectify
      </h1>
    </div>
  );
}
