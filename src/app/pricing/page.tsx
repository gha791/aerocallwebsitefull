import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const pricingTiers = [
    {
        name: "Basic",
        price: "$29",
        priceSuffix: "/month",
        features: [
            "10 users included",
            "2 GB of storage",
            "Email support",
            "Help center access"
        ],
        buttonText: "Get Started",
        buttonLink: "/signup"
    },
    {
        name: "Pro",
        price: "$59",
        priceSuffix: "/month",
        features: [
            "20 users included",
            "10 GB of storage",
            "Priority email support",
            "Help center access"
        ],
        buttonText: "Get Started",
        buttonLink: "/signup",
        isPopular: true
    },
    {
        name: "Enterprise",
        price: "Contact Us",
        priceSuffix: "",
        features: [
            "50+ users included",
            "100 GB of storage",
            "Phone and email support",
            "Dedicated account manager"
        ],
        buttonText: "Contact Sales",
        buttonLink: "/contact"
    }
]

export default function PricingPage() {
  return (
    <main className="flex-1 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">Simple, transparent pricing</h1>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Choose the plan that's right for your business. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          {pricingTiers.map((tier) => (
             <Card key={tier.name} className={tier.isPopular ? "border-primary ring-2 ring-primary shadow-lg" : ""}>
                <CardHeader className="text-center">
                    {tier.isPopular && <div className="text-primary font-semibold mb-2">Most Popular</div>}
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription>
                        <span className="text-4xl font-bold">{tier.price}</span>
                        {tier.priceSuffix && <span className="text-muted-foreground">{tier.priceSuffix}</span>}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <ul className="space-y-2">
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
                        <Link href={tier.buttonLink}>{tier.buttonText}</Link>
                    </Button>
                </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
