import { FeatureCard } from "@/components/feature-card";
import { featuresData } from "@/lib/data";

export default function FeaturesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Features</h1>
        <p className="text-muted-foreground">Everything you need for modern business communication.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {featuresData.map((feature, index) => (
          <FeatureCard 
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
}
