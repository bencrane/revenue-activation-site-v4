import { Section, Container, Button } from "@/components/shared";

export function CTA() {
  return (
    <Section className="py-24 md:py-32 lg:py-40">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-6">
            Stop selling <span className="text-accent">blind</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10">
            Get a custom analysis of your warm signal opportunities. We'll show
            you exactly what intelligence is hiding in your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="text-base px-8 py-4">
              Get Your First Report
            </Button>
            <Button variant="secondary" className="text-base px-8 py-4">
              See How It Works
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
