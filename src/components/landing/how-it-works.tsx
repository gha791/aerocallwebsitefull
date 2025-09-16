import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoveRight } from "lucide-react";

const steps = [
    {
        title: "Choose Your Plan",
        description: "Select the plan that fits your business needs, from solo entrepreneurs to growing teams."
    },
    {
        title: "Get Your Number",
        description: "Pick a new local or toll-free number, or easily port your existing one to our platform."
    },
    {
        title: "Start Calling",
        description: "Download our app on any device and start making and receiving calls instantly."
    }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto animate-fade-in-up">
            <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Get Started in 3 Simple Steps</h2>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                Setting up your cloud phone system has never been easier.
            </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-center">
                        <Card className="flex-1 hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center font-bold">{index + 1}</div>
                                    <CardTitle>{step.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{step.description}</p>
                            </CardContent>
                        </Card>
                        {index < steps.length - 1 && <MoveRight className="h-8 w-8 text-muted-foreground mx-4 hidden md:block" />}
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
