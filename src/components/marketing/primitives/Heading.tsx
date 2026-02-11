import { cn } from "@/lib/utils";

type HeadingVariant = "display" | "h1" | "h2" | "h3";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "span";
  variant?: HeadingVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<HeadingVariant, string> = {
  display: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.02em] leading-[0.95]",
  h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.02em] leading-[1]",
  h2: "text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[-0.01em] leading-[1.1]",
  h3: "text-xl md:text-2xl font-medium leading-[1.3]",
};

export function Heading({
  as: Component = "h2",
  variant = "h2",
  children,
  className,
}: HeadingProps) {
  return (
    <Component className={cn(variantStyles[variant], "text-text-primary", className)}>
      {children}
    </Component>
  );
}
