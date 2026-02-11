import { Container, Section, Text } from "../primitives";

export function FirmDescription() {
  return (
    <Section className="py-24 md:py-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Text className="text-2xl md:text-3xl lg:text-4xl leading-[1.5] text-text-primary font-light text-center mb-8">
            Revenue Activation is a RevOps firm that builds the technical backbone of your revenue motion. We design and implements the
            systems —{" "}
            <span className="text-primary font-normal">
              data infrastructure, automation, AI-powered workflows, and
              reporting
            </span>{" "}
            — that make your CRM and sales tools actually drive pipeline.
          </Text>
          <Text className="text-xl md:text-2xl text-text-secondary text-center max-w-3xl mx-auto">
            We work at the intersection of sales operations, data, and automation. Every engagement is a scoped project with a clear deliverable.
          </Text>
        </div>
      </Container>
    </Section>
  );
}
