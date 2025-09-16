import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="flex-1 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
                <p className="text-muted-foreground md:text-lg mt-4 max-w-md">
                    Have questions about our plans, features, or anything else? Our team is here to help.
                </p>
            </div>
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
