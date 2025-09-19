

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { ContactRatings } from "@/components/landing/contact-ratings";

const benefits = [
    "Evaluate Connectify for your organization",
    "Request a demo",
    "Learn which plan is best for your team",
]

export default function ContactPage() {
  return (
    <main className="flex-1 py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="pt-8">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Contact our Sales team</h1>
                <ul className="mt-8 space-y-4">
                    {benefits.map(benefit => (
                        <li key={benefit} className="flex items-center gap-3">
                            <CheckCircle className="h-6 w-6 text-primary" />
                            <span className="text-lg text-muted-foreground">{benefit}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-12">
                    <p className="text-muted-foreground">Technical issues or product questions?</p>
                    <Link href="#" className="flex items-center gap-2 font-semibold text-foreground group">
                        Contact Support <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name*</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name*</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email">Email address*</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                 <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="callback-number">Callback number*</Label>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="US">
                        <SelectTrigger className="w-[120px]">
                            <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="US">🇺🇸 +1</SelectItem>
                            <SelectItem value="CA">🇨🇦 +1</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input id="callback-number" placeholder="000 000 0000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company name*</Label>
                  <Input id="company-name" placeholder="Where do you work?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website*</Label>
                  <Input id="website" placeholder="Enter your website URL" />
                </div>
                <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="users">How many users will you need on Connectify?*</Label>
                    <Select>
                        <SelectTrigger id="users">
                            <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1-5">1-5</SelectItem>
                            <SelectItem value="6-10">6-10</SelectItem>
                            <SelectItem value="11-25">11-25</SelectItem>
                            <SelectItem value="26-50">26-50</SelectItem>
                            <SelectItem value="51+">51+</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="discuss">What would you like to discuss?*</Label>
                    <Select>
                        <SelectTrigger id="discuss">
                            <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="evaluate">Evaluating Connectify for my team</SelectItem>
                            <SelectItem value="demo">Request a demo</SelectItem>
                            <SelectItem value="pricing">Pricing questions</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message">How can our Sales team help?</Label>
                  <Textarea id="message" placeholder="I'm interested in Connectify, I would like to learn more about..." className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full md:col-span-2" size="lg">Submit</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <ContactRatings />
    </main>
  );
}
