import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, DollarSign, Users } from "lucide-react";

const benefits = [
    {
        icon: BrainCircuit,
        title: "AI-Powered Features",
        description: "Leverage cutting-edge AI for call transcriptions, summaries, and sentiment analysis to gain deeper insights from your conversations."
    },
    {
        icon: Users,
        title: "Scales With You",
        description: "From a one-person startup to a hundred-person team, AEROCALL grows with your business. Add lines and users in a few clicks."
    },
    {
        icon: DollarSign,
        title: "Affordable & Transparent",
        description: "Enjoy unlimited calling in the US & Canada with no surprise fees. Our simple pricing makes it easy to budget for your communication needs."
    }
]

export function WhyConnectify() {
    return (
        <section className="py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container mx-auto animate-fade-in-up">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Choose AEROCALL?</h2>
                    <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                        Discover the advantages of a modern, AI-enhanced phone system.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="bg-accent p-3 rounded-lg w-fit mb-4">
                                        <Icon className="h-6 w-6 text-accent-foreground" />
                                    </div>
                                    <CardTitle>{benefit.title}</CardTitle>
                                    <CardDescription className="pt-2">{benefit.description}</CardDescription>
                                </CardHeader>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
