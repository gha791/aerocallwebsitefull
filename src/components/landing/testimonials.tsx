import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
    {
        name: "Sarah L.",
        role: "CEO, Tech startup",
        avatar: "https://picsum.photos/seed/1/40/40",
        testimonial: "Connectify has revolutionized our team's communication. The platform is intuitive, reliable, and has features that we now can't live without. Highly recommended!"
    },
    {
        name: "Michael B.",
        role: "Project Manager, Creative Agency",
        avatar: "https://picsum.photos/seed/2/40/40",
        testimonial: "The call forwarding and IVR features are game-changers for our remote team. It's like having a full-fledged office phone system, but completely flexible."
    },
    {
        name: "Jessica P.",
        role: "Owner, Small Business",
        avatar: "https://picsum.photos/seed/3/40/40",
        testimonial: "Switching to Connectify was seamless. We kept our old number and gained so much functionality. Customer support was incredibly helpful during the process."
    },
    {
        name: "David H.",
        role: "IT Director, Enterprise",
        avatar: "https://picsum.photos/seed/4/40/40",
        testimonial: "As an IT Director, I appreciate the security and multi-platform support. It's easy to manage users and the service is rock-solid. A great enterprise solution."
    },
]

export function Testimonials() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto animate-fade-in-up">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Loved by Teams Everywhere</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
            See what our customers are saying about how Connectify transformed their business.
          </p>
        </div>
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
        >
            <CarouselContent>
            {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                        <Card className="h-full">
                            <CardContent className="flex flex-col justify-between p-6 h-full">
                                <p className="text-muted-foreground italic mb-6">"{testimonial.testimonial}"</p>
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
