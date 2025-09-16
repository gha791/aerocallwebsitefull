
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const pricingTiers = [
    {
        name: "Starter",
        price: "$20",
        priceSuffix: "/user/month",
        description: "Perfect for small teams and startups getting started.",
        features: [
            "Up to 5 Users",
            "1 Local Number",
            "HD Voice Quality",
            "Call Forwarding",
            "Basic Analytics"
        ],
        buttonText: "Choose Plan",
        buttonLink: "/contact",
    },
    {
        name: "Business",
        price: "$35",
        priceSuffix: "/user/month",
        description: "Ideal for growing businesses that need more power and flexibility.",
        features: [
            "Up to 25 Users",
            "5 Local Numbers",
            "Conference Calling",
            "Advanced Analytics",
            "CRM Integration",
            "24/7 Support"
        ],
        buttonText: "Choose Plan",
        buttonLink: "/contact",
        isPopular: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        priceSuffix: "",
        description: "Tailored solutions for large organizations with specific needs.",
        features: [
            "Unlimited Users",
            "Custom Number Blocks",
            "Dedicated Account Manager",
            "Enterprise-grade Security",
            "Custom Integrations",
            "SLA & Priority Support"
        ],
        buttonText: "Contact Sales",
        buttonLink: "/contact",
    }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Simple, Transparent Pricing
                    <br />
                    for <span className="text-accent">Every Business</span>
                </h2>
                <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                    Choose the plan that fits your needs. No hidden fees, no surprises.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch max-w-5xl mx-auto">
                {pricingTiers.map((tier) => (
                    <Card key={tier.name} className={`flex flex-col h-full ${tier.isPopular ? "border-primary ring-2 ring-primary shadow-lg" : "shadow-md"}`}>
                        <CardHeader className="text-left">
                            <CardTitle className="text-2xl">{tier.name}</CardTitle>
                            <CardDescription className="min-h-[40px]">{tier.description}</CardDescription>
                            <div className="flex items-baseline">
                                <span className="text-4xl font-bold">{tier.price}</span>
                                {tier.priceSuffix && <span className="text-muted-foreground">{tier.priceSuffix}</span>}
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-3">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-primary" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button asChild className="w-full" variant={tier.isPopular ? "default" : "outline"}>
                                <Link href={tier.buttonLink}>
                                    {tier.buttonText}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  );
}
