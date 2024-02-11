import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/classnameMerge";

const buttonVariants = cva(
  "w-full rounded-full px-[56px] font-medium text-lg cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        small: "py-0.5",
        regular: "py-1.5 max-md:py-1",
        large: "py-2",
      },
      variant: {
        primary:
          "bg-ultramarine-shadow text-white hover:bg-ultramarine-shadow/80 disabled:bg-ultramarine-shadow/30",
        "primary-outline":
          "border border-2 border-ultramarine-shadow text-ultramarine-shadow hover:bg-ultramarine-shadow hover:text-white disabled:opacity-30",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "regular",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ size, variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
