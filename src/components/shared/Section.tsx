import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "surface";
  id?: string;
}

export function Section({
  children,
  className,
  background = "default",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 lg:py-32",
        background === "surface" && "bg-surface",
        className
      )}
    >
      {children}
    </section>
  );
}
