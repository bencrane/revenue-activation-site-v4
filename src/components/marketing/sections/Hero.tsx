import { Container, Section, Heading, Text, buttonVariants } from "../primitives";
import { SystemVisualization } from "./SystemVisualization";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <Section className="pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-28 lg:pb-36 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* System visualization - positioned as background element on right */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[45%] h-[600px] hidden lg:block opacity-50">
        <SystemVisualization />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <Heading as="h1" variant="display" className="mb-8">
            We build the technical <span className="text-primary">backbone</span> of your revenue motion
          </Heading>
          <Text className="max-w-2xl mb-12 text-xl md:text-2xl leading-relaxed">
            We build the systems so your team spends more time in front of customers and less time on everything else.
          </Text>
          <a
            href="#contact"
            className={cn(buttonVariants({ size: "lg" }), "gap-3")}
          >
            Get in Touch
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
