import { cn } from "@/lib/utils";

type TextVariant = "body" | "small" | "label";

interface TextProps {
  as?: "p" | "span" | "div";
  variant?: TextVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<TextVariant, string> = {
  body: "text-lg leading-relaxed",
  small: "text-sm leading-normal",
  label: "text-xs uppercase tracking-[0.15em] font-medium",
};

export function Text({
  as: Component = "p",
  variant = "body",
  children,
  className,
}: TextProps) {
  return (
    <Component
      className={cn(variantStyles[variant], "text-text-secondary", className)}
    >
      {children}
    </Component>
  );
}
