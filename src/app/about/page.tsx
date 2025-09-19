
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { placeholderImages } from "@/lib/placeholder-images";
import { Briefcase, Heart, Lightbulb, Users } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about the mission, values, and team behind AEROCALL. We're here to help businesses grow with better communication.",
};

const values = [
    {
        icon: Heart,
        title: "Customer-Obsessed",
        description: "We start with the customer and work backwards. We work vigorously to earn and keep customer trust."
    },
    {
        icon: Users,
        title: "Take Ownership",
        description: "We are owners. We think long term and don't sacrifice long-term value for short-term results."
    },
    {
        icon: Lightbulb,
        title: "Invent and Simplify",
        description: "We expect and require innovation and invention from our teams and find ways to simplify."
    },
    {
        icon: Briefcase,
        title: "Default to Transparency",
        description: "We are unusually candid with each other, and we share information openly, broadly, and deliberately."
    },
];

export default function AboutPage() {
    const teamImage = placeholderImages.find(p => p.id === 'team-photo');
    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">We're here to help people and their businesses grow.</h1>
                    <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">AEROCALL is the modern business phone for today's work. We are on a mission to make it easy for businesses to build better relationships and communicate more effectively, from anywhere.</p>
                </div>
            </section>

             {/* Our Story Section */}
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
                        <p className="text-muted-foreground md:text-lg">
                            We started AEROCALL because we were frustrated with expensive, complicated phone systems that only big companies could afford. Every small business deserves access to professional communication tools.
                        </p>
                        <p className="text-muted-foreground md:text-lg">
                            Our team has experience building communication platforms, but we wanted to do things differently. Instead of adding complexity, we focused on simplicity. Instead of hidden fees, we chose transparency.
                        </p>
                        <p className="text-muted-foreground md:text-lg">
                            We're building AEROCALL to be the communication platform we always wished existed - powerful enough for enterprises, simple enough for startups, and affordable for everyone in between.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
                        <p className="text-muted-foreground md:text-lg">
                            To make professional communication simple, affordable, and accessible to businesses of all sizes. We believe every company deserves the tools to communicate effectively, without the complexity or cost that traditionally comes with enterprise solutions.
                        </p>
                    </div>
                </div>
            </section>


            {/* Team Image Section */}
            {teamImage && (
                <section className="container mx-auto my-20 md:my-32">
                     <Image
                        src={teamImage.imageUrl}
                        alt={teamImage.description}
                        width={1200}
                        height={600}
                        data-ai-hint={teamImage.imageHint}
                        className="rounded-lg shadow-2xl mx-auto"
                    />
                </section>
            )}

            {/* Values Section */}
            <section className="py-20 md:py-32 bg-secondary">
                <div className="container mx-auto">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Our values</h2>
                        <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                            The principles that guide our work and our team.
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <Card key={index} className="bg-card text-center items-center flex flex-col p-6">
                                     <div className="bg-primary text-primary-foreground p-3 rounded-lg w-fit mb-4">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.description}</p>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

             {/* Join Our Team CTA */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Join our team</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                        We're always looking for talented people to join us on our mission.
                    </p>
                    <div className="mt-8">
                        <Button size="lg" asChild>
                            <Link href="/contact">View open roles</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
}
