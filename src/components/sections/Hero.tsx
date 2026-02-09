"use client";

import { Section, Container, Button } from "@/components/shared";

export function Hero() {
  return (
    <Section className="pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24 lg:pb-32 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-6">
              Your sales team is working{" "}
              <span className="text-accent">blind</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl">
              Modern sales teams need data that doesn't exist in their CRM.
              Customer overlap. Alumni signals. Tech stack patterns. Hiring
              indicators. The intelligence that tells you who's actually warm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">See How It Works</Button>
              <Button variant="secondary">Get Your First Report</Button>
            </div>
          </div>

          {/* Right: Abstract Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg ml-auto">
              {/* Concentric rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-border/30" />
              </div>
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-border/40" />
              </div>
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-border/50" />
              </div>
              <div className="absolute inset-24 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-accent/30" />
              </div>

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-accent/10 blur-2xl" />
              </div>

              {/* Floating signal pills */}
              <div className="absolute top-8 right-12 px-3 py-1.5 bg-surface border border-border rounded-full text-sm text-text-secondary">
                Customer Overlap
              </div>
              <div className="absolute top-1/4 left-0 px-3 py-1.5 bg-surface border border-border rounded-full text-sm text-text-secondary">
                Alumni Signals
              </div>
              <div className="absolute bottom-1/4 right-4 px-3 py-1.5 bg-surface border border-border rounded-full text-sm text-text-secondary">
                Tech Stack
              </div>
              <div className="absolute bottom-12 left-8 px-3 py-1.5 bg-surface border border-border rounded-full text-sm text-text-secondary">
                Hiring Intent
              </div>
              <div className="absolute top-1/2 right-0 translate-x-1/4 px-3 py-1.5 bg-surface border border-accent/50 rounded-full text-sm text-accent">
                Warm Signal
              </div>

              {/* Connection lines (decorative dots) */}
              <div className="absolute top-1/3 left-1/3 w-2 h-2 rounded-full bg-accent/60" />
              <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-accent/40" />
              <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 rounded-full bg-text-muted/40" />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
