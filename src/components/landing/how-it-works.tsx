
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { placeholderImages } from "@/lib/placeholder-images";
import Image from "next/image";

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
        description: "Log in to your account from any device and start making and receiving calls instantly."
    }
]

export function HowItWorks() {
    const howItWorksImage = placeholderImages.find(p => p.id === 'how-it-works-image');

  return (
    <section id="how-it-works" className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto animate-fade-in-up">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Get Started in 3 Simple Steps</h2>
                <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                    Setting up your cloud phone system has never been easier.
                </p>
            </div>
            <div className="grid gap-12 md:grid-cols-2 items-center">
                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <Card key={index} className="flex-1 hover:shadow-lg transition-shadow bg-secondary">
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">{index + 1}</div>
                                    <CardTitle className="text-xl">{step.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground ml-14">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div>
                    {howItWorksImage && (
                        <Image
                            src={howItWorksImage.imageUrl}
                            alt={howItWorksImage.description}
                            width={600}
                            height={400}
                            data-ai-hint={howItWorksImage.imageHint}
                            className="rounded-lg shadow-xl mx-auto"
                        />
                    )}
                </div>
            </div>
        </div>
    </section>
  );
}
