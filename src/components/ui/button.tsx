import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors cursor-pointer focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
          variant === "default" && "px-4 py-2",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
