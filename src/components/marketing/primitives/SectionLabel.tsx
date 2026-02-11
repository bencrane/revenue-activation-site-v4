import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block px-4 py-1.5 text-xs uppercase tracking-[0.2em] font-medium",
        "border border-primary/30 rounded-full",
        "text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
