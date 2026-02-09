import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-accent text-background font-semibold",
    "hover:bg-accent-hover hover:-translate-y-0.5",
    "active:translate-y-0"
  ),
  secondary: cn(
    "bg-transparent text-text-primary font-semibold",
    "border border-border",
    "hover:border-text-secondary hover:-translate-y-0.5",
    "active:translate-y-0"
  ),
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center",
          "px-6 py-3 rounded-lg",
          "text-base leading-normal",
          "transition-all duration-200 ease-in-out",
          "cursor-pointer",
          "focus-ring",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
