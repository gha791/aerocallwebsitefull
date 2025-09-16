import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon, PhoneForwarded, BringToFront, Network, Laptop } from 'lucide-react';

const iconMap: { [key: string]: LucideIcon } = {
  PhoneForwarded,
  BringToFront,
  Network,
  Laptop
};

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const IconComponent = iconMap[icon];

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="bg-accent p-3 rounded-lg">
            {IconComponent && <IconComponent className="h-6 w-6 text-accent-foreground" />}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
        <CardDescription className="pt-4">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
