"use client";

import Link from "next/link";
import { Container } from "@/components/shared";
import { Button } from "@/components/shared";

const navLinks = [
  { href: "#problem", label: "The Problem" },
  { href: "#signals", label: "Signals" },
  { href: "#solution", label: "Solution" },
];

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-text-primary tracking-tight transition-colors duration-200 hover:text-accent"
          >
            Revenue Activation
          </Link>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Button variant="primary" className="text-sm px-4 py-2">
            See How It Works
          </Button>
        </div>
      </Container>
    </nav>
  );
}
