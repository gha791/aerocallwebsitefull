import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";

export function HeroImage() {
    const heroImage = placeholderImages.find(p => p.id === 'hero-image');

    if(!heroImage) return null;

  return (
    <div className="mt-12 md:mt-16 lg:mt-20 animate-fade-in-up animation-delay-[600ms]">
        <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            width={1200}
            height={675}
            data-ai-hint={heroImage.imageHint}
            className="rounded-lg shadow-2xl mx-auto"
        />
    </div>
  );
}
