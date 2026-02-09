import { cn } from "@/lib/utils";

type HeadingVariant = "display" | "h1" | "h2" | "h3";

interface HeadingProps {
  variant?: HeadingVariant;
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

const variantStyles: Record<HeadingVariant, string> = {
  display: "text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none",
  h1: "text-4xl md:text-5xl font-bold tracking-tight leading-tight",
  h2: "text-3xl md:text-4xl font-semibold leading-tight",
  h3: "text-xl md:text-2xl font-semibold leading-snug",
};

const defaultTags: Record<HeadingVariant, "h1" | "h2" | "h3" | "p"> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
};

export function Heading({
  variant = "h2",
  children,
  className,
  as,
}: HeadingProps) {
  const Component = as || defaultTags[variant];

  return (
    <Component className={cn(variantStyles[variant], className)}>
      {children}
    </Component>
  );
}

interface AccentTextProps {
  children: React.ReactNode;
}

export function AccentText({ children }: AccentTextProps) {
  return <span className="text-accent">{children}</span>;
}
