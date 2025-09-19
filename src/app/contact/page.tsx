
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { ContactRatings } from "@/components/landing/contact-ratings";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { submitContactForm } from "./actions";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import type { Metadata } from "next";

// Note: Metadata can't be exported from client components. 
// This is here for reference. For it to work, this would need to be a server component.
// export const metadata: Metadata = {
//   title: "Contact Sales | AEROCALL",
//   description: "Get in touch with the AEROCALL sales team to request a demo, evaluate our platform, or get pricing information.",
// };

const benefits = [
    "Evaluate AEROCALL for your organization",
    "Request a demo",
    "Learn which plan is best for your team",
]

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  callbackNumber: z.string().optional(),
  countryCode: z.string().optional(),
  companyName: z.string().min(1, "Company name is required"),
  website: z.string().url("Invalid website URL").optional().or(z.literal('')),
  users: z.string().min(1, "Please select the number of users"),
  discussionTopic: z.string().min(1, "Please select a topic"),
  message: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      callbackNumber: "",
      countryCode: "US",
      companyName: "",
      website: "",
      users: "",
      discussionTopic: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    const result = await submitContactForm(values);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Form Submitted!",
        description: "Thank you for contacting us. Our team will get back to you shortly.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: result.error,
      });
    }
  }

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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Email address*</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="callback-number">Callback number</Label>
                    <div className="flex items-center gap-2">
                      <Controller
                        control={form.control}
                        name="countryCode"
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="w-[120px]">
                              <SelectValue placeholder="Country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="US">🇺🇸 +1</SelectItem>
                              <SelectItem value="CA">🇨🇦 +1</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      <Controller
                        control={form.control}
                        name="callbackNumber"
                        render={({ field }) => (
                          <Input id="callback-number" placeholder="000 000 0000" {...field} />
                        )}
                      />
                    </div>
                  </div>
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Where do you work?" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your website URL" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="users"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>How many users will you need on AEROCALL?*</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-5">1-5</SelectItem>
                            <SelectItem value="6-10">6-10</SelectItem>
                            <SelectItem value="11-25">11-25</SelectItem>
                            <SelectItem value="26-50">26-50</SelectItem>
                            <SelectItem value="51+">51+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="discussionTopic"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>What would you like to discuss?*</FormLabel>
                         <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select..." />
                            </Trigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="evaluate">Evaluating AEROCALL for my team</SelectItem>
                            <SelectItem value="demo">Request a demo</SelectItem>
                            <SelectItem value="pricing">Pricing questions</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>How can our Sales team help?</FormLabel>
                        <FormControl>
                          <Textarea placeholder="I'm interested in AEROCALL, I would like to learn more about..." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full md:col-span-2" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
      <ContactRatings />
    </main>
  );
}
