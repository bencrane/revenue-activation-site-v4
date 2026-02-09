import { Section, Container, SectionLabel, Button } from "@/components/shared";

const capabilities = [
  {
    title: "Surface warm signals for outbound",
    description: "Overlap, connections, and timing indicators",
    items: ["Customer overlap analysis", "Alumni connection mapping", "Perfect timing triggers"],
  },
  {
    title: "Enrich inbound leads automatically",
    description: "Multi-source waterfall enrichment",
    items: ["40%+ coverage improvement", "Real-time data append", "Confidence scoring"],
  },
  {
    title: "Keep data fresh continuously",
    description: "Not one-and-done—always current",
    items: ["Automated refresh cycles", "Change detection alerts", "Historical tracking"],
  },
];

export function Solution() {
  return (
    <Section id="solution" background="surface">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel className="mb-6">The Solution</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-6">
            Custom data pipelines,{" "}
            <span className="text-accent">built for you</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            We don't sell software. We build custom data infrastructure that
            surfaces the signals your sales team needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-border bg-background transition-all duration-300 hover:border-text-muted"
            >
              <div className="text-accent text-sm font-semibold uppercase tracking-wide mb-4">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {capability.title}
              </h3>
              <p className="text-text-secondary mb-6">{capability.description}</p>
              <ul className="space-y-2">
                {capability.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" className="text-base px-8 py-4">
            See How It Works
          </Button>
        </div>
      </Container>
    </Section>
  );
}
