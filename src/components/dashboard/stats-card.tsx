import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon, PhoneCall, Clock, PhoneIncoming, PhoneMissed } from 'lucide-react';

const iconMap: { [key: string]: LucideIcon } = {
  PhoneCall,
  Clock,
  PhoneIncoming,
  PhoneMissed
};

type StatsCardProps = {
  title: string;
  value: string;
  change: string;
  icon: string;
};

export function StatsCard({ title, value, change, icon }: StatsCardProps) {
  const isPositive = change.startsWith('+');
  const IconComponent = iconMap[icon];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {IconComponent && <IconComponent className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={cn("text-xs", isPositive ? "text-green-600" : "text-red-600")}>
          {change} from last month
        </p>
      </CardContent>
    </Card>
  );
}
