import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface border border-border-subtle rounded-lg p-6 md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
