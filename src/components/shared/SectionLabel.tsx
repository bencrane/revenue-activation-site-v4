import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase",
        "border border-border rounded-sm",
        "text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
