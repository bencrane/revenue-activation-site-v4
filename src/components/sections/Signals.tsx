import { Section, Container, SectionLabel } from "@/components/shared";

const signals = [
  {
    question: "Who just hired someone from your best customer?",
    type: "Alumni Signal",
  },
  {
    question: "Who shares 5+ customers with you?",
    type: "Customer Overlap",
  },
  {
    question: "Who just adopted the exact tech stack your champions use?",
    type: "Tech Stack Match",
  },
  {
    question: "Who's hiring for roles that indicate buying intent?",
    type: "Hiring Intent",
  },
  {
    question: "Who visited your pricing page 3 times this week?",
    type: "Engagement Signal",
  },
];

export function Signals() {
  return (
    <Section id="signals">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Content */}
          <div>
            <SectionLabel className="mb-6">What's Missing</SectionLabel>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-6">
              The signals that reveal{" "}
              <span className="text-accent">warm</span> opportunities
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
              Your CRM shows you contacts. We show you which ones are actually
              ready to talk—and why.
            </p>
          </div>

          {/* Right: Signal List */}
          <div className="space-y-4">
            {signals.map((signal, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 rounded-lg border border-border bg-surface transition-all duration-300 hover:border-accent/50"
              >
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 text-accent text-sm font-semibold">
                  {index + 1}
                </span>
                <div>
                  <p className="text-lg text-text-primary font-medium mb-1">
                    {signal.question}
                  </p>
                  <span className="text-sm text-text-muted uppercase tracking-wide">
                    {signal.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
