import { Container, Section, Heading } from "../primitives";

export function Contact() {
  return (
    <Section id="contact" className="py-32 md:py-40 lg:py-48">
      <Container>
        <div className="max-w-2xl">
          <Heading as="h2" variant="h2" className="mb-10">
            Get in Touch
          </Heading>
          
          <a
            href="mailto:hello@revenueactivation.com"
            className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-medium text-primary hover:text-primary-light transition-colors duration-200"
          >
            hello@revenueactivation.com
            <svg
              className="w-6 h-6 transition-transform duration-200 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </Container>
    </Section>
  );
}
