import { Section, Container, SectionLabel } from "@/components/shared";

const scenarios = [
  {
    title: "Outbound",
    description:
      "Sales reps calling strangers when warm paths exist through shared customers, alumni connections, and tech stack matches they can't see.",
  },
  {
    title: "Inbound",
    description:
      "Leads arriving but you can't score or route them properly because enrichment coverage is 40%. By the time you figure out it's a good lead, they've gone cold.",
  },
];

export function Problem() {
  return (
    <Section id="problem" background="surface">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <SectionLabel className="mb-6">The Problem</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-6">
            Two scenarios, same{" "}
            <span className="text-accent">blind spot</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {scenarios.map((scenario) => (
            <div
              key={scenario.title}
              className="group p-8 md:p-10 rounded-lg border border-border bg-background transition-all duration-300 hover:border-text-muted"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                {scenario.title}
              </h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                {scenario.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
