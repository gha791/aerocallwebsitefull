import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { featuresData } from "@/lib/data";

export function Features() {
  return (
    <section id="features" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto animate-fade-in-up">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Powerful Features, Simple Interface</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Everything you need for modern business communication, built for scale and designed for humans.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card text-center items-center flex flex-col" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader className="items-center">
                  <div className="bg-accent p-3 rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="pt-2">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
