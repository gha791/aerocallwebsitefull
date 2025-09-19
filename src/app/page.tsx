
"use client";

import { Hero } from "@/components/landing/hero";
import { HeroImage } from "@/components/landing/hero-image";
import { TrustedBy } from "@/components/landing/trusted-by";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { WhyConnectify } from "@/components/landing/why-connectify";
import { Testimonials } from "@/components/landing/testimonials";
import { Cta } from "@/components/landing/cta";
import type { Metadata } from "next";

// Note: Metadata can't be exported from client components. 
// This is here for reference. For it to work, this would need to be a server component.
// export const metadata: Metadata = {
//   title: 'AEROCALL | The Future of Business Communication',
//   description: 'AEROCALL offers modern cloud calling for ambitious teams. Simple setup, powerful features, and unparalleled reliability. Serving USA & Canada with seamless connections.',
// };

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <HeroImage />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <WhyConnectify />
      <Testimonials />
      <Cta />
    </main>
  );
}
