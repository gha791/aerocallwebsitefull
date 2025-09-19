import { Pricing } from "@/components/landing/pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing Plans",
    description: "Explore simple, transparent pricing for AEROCALL's business phone system. Find the perfect plan for your team, from startups to enterprises.",
};

export default function PricingPage() {
  return (
    <main className="flex-1">
        <Pricing />
    </main>
  );
}
