"use client";

import { Container } from "../primitives";
import { useState, useEffect } from "react";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Wordmark */}
          <a
            href="/"
            className="text-sm font-semibold tracking-[0.25em] text-text-primary uppercase"
          >
            Revenue Activation
          </a>

          {/* Center nav - desktop */}
          <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-surface-elevated/50 border border-border-subtle">
            <a
              href="#practice-areas"
              className="px-5 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-surface-hover"
            >
              Practice Areas
            </a>
            <a
              href="mailto:team@revenueactivation.com"
              className="px-5 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-full hover:bg-surface-hover"
            >
              Contact
            </a>
          </div>

          {/* CTA - desktop */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center h-10 px-6 text-sm font-medium rounded-full bg-primary text-background hover:bg-primary-light transition-colors"
          >
            Get in Touch
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-6 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              <a
                href="#practice-areas"
                className="px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-surface-elevated rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Practice Areas
              </a>
              <a
                href="mailto:team@revenueactivation.com"
                className="px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-surface-elevated rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center justify-center h-12 px-6 text-sm font-medium rounded-full bg-primary text-background hover:bg-primary-light transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
