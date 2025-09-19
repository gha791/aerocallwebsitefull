
const stats = [
  {
    value: "99.9%",
    label: "Uptime SLA",
    description: "Reliable service you can count on",
  },
  {
    value: "< 50ms",
    label: "Call Latency",
    description: "Crystal clear voice quality",
  },
  {
    value: "24/7",
    label: "Expert Support",
    description: "Real humans when you need help",
  },
  {
    value: "50+",
    label: "Countries",
    description: "Global reach, local presence",
  },
];

export function TrustedBy() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto">
        <div className="rounded-xl bg-secondary p-8 md:p-12">
            <div className="text-center space-y-3 mb-10">
                <h2 className="text-3xl md:text-4xl font-bold">Trusted by Growing Businesses</h2>
                <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                    Join thousands of companies that rely on our platform daily
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat) => (
                    <div key={stat.label}>
                        <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
                        <p className="mt-1 text-lg font-semibold">{stat.label}</p>
                        <p className="mt-1 text-muted-foreground">{stat.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
