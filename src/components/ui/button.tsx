import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link" | "primary" | "secondary" | "accent";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-primary text-white hover:bg-primary/90": variant === "default",
            "bg-transparent border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800": variant === "outline",
            "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800": variant === "ghost",
            "bg-transparent underline-offset-4 hover:underline text-primary": variant === "link",
            "bg-primary text-white hover:bg-primary/90": variant === "primary",
            "bg-secondary text-white hover:bg-secondary/90": variant === "secondary",
            "bg-accent text-white hover:bg-accent/90": variant === "accent",
            "h-10 px-4 py-2": size === "default",
            "h-8 px-3 text-sm": size === "sm",
            "h-12 px-6 text-lg": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
