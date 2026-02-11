"use client";

import { Container, Section, Heading, Text, SectionLabel } from "../primitives";
import { useState } from "react";

const practiceAreas = [
  {
    number: "01",
    title: "RevOps Diagnostic",
    description:
      "A scored technical assessment of your CRM, data quality, workflows, and reporting. You get a prioritized roadmap of what's broken, what's costing you deals, and what to fix first.",
    status: "assess",
  },
  {
    number: "02",
    title: "Data Enrichment Pipelines",
    description:
      "We build the infrastructure that keeps your data clean, complete, and enriched — so your team is always working with accurate records, not guessing.",
    status: "running",
  },
  {
    number: "03",
    title: "Lead Scoring, Routing & Workflows",
    description:
      "When a lead comes in or a signal fires, the right rep gets it instantly with full context. No queue, no lag, no manual work.",
    status: "active",
  },
  {
    number: "04",
    title: "Signal Detection + Sales Intelligence",
    description:
      "We surface what your team is missing — job changes, funding events, customer overlap, buying signals — so they know who to talk to and why before the competition does.",
    status: "monitoring",
  },
  {
    number: "05",
    title: "Automated Outreach & Lifecycle Marketing",
    description:
      "AI-driven sequences triggered by real data — onboarding, re-engagement, expansion, renewal. The system personalizes, sends, and follows up so nothing falls through the cracks.",
    status: "running",
  },
  {
    number: "06",
    title: "Pipeline Reporting + Revenue Forecasting",
    description:
      "Real-time visibility into what's working, what's stuck, and what's coming. Your team makes decisions off data, not gut.",
    status: "live",
  },
];

function StatusIndicator({ status }: { status: string }) {
  return (
    <div className="flex items-center gap-2 text-xs text-text-muted font-mono uppercase tracking-wider">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      {status}
    </div>
  );
}

export function PracticeAreas() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Section id="practice-areas" className="py-24 md:py-32 lg:py-40 bg-surface">
      <Container>
        <div className="mb-16 md:mb-20 max-w-2xl">
          <SectionLabel className="mb-6">Practice Areas</SectionLabel>
          <Heading as="h2" variant="h2">
            The systems we build
          </Heading>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {practiceAreas.map((area, index) => (
            <div
              key={area.number}
              className="group relative bg-surface-elevated rounded-lg p-6 md:p-8 transition-all duration-300 hover:bg-surface-hover border border-transparent hover:border-border-hover"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Top row: number + status */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-light text-text-muted tabular-nums">
                  {area.number}
                </span>
                <StatusIndicator status={area.status} />
              </div>

              <Heading
                as="h3"
                variant="h3"
                className="mb-4 group-hover:text-primary transition-colors duration-200"
              >
                {area.title}
              </Heading>

              <Text className="text-base leading-relaxed text-text-secondary">
                {area.description}
              </Text>

              {/* Bottom border animation */}
              <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden rounded-b-lg">
                <div
                  className={`h-full bg-primary transition-transform duration-500 ease-out ${
                    hoveredIndex === index ? "translate-x-0" : "-translate-x-full"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
