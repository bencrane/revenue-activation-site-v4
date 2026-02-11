import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-ring cursor-pointer disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-background hover:bg-primary-light",
        secondary:
          "border border-border-subtle bg-transparent text-text-primary hover:bg-surface-elevated hover:border-text-muted",
        ghost: "bg-transparent text-text-secondary hover:text-text-primary",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-[--radius-sm]",
        default: "h-11 px-6 text-base rounded-[--radius-md]",
        lg: "h-14 px-8 text-lg rounded-[--radius-md]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
