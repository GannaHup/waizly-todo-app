import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/classnameMerge";

export type TextElement = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "small";

interface TextProps extends VariantProps<typeof textVariants> {
  className?: string;
  children: React.ReactNode;
}

type TextVariant =
  | "heading-1"
  | "heading-2"
  | "title"
  | "regular"
  | "small"
  | "xsmall";

type VariantMappingType = {
  [key in TextVariant]: TextElement;
};

const variantMapping: VariantMappingType = {
  "heading-1": "h2",
  "heading-2": "h3",
  title: "h4",
  regular: "p",
  small: "span",
  xsmall: "span",
};

const textVariants = cva("text-pot-black", {
  variants: {
    variant: {
      "heading-1": "font-extrabold text-4xl max-md:text-[32px]",
      "heading-2": "font-semibold text-2xl max-md:text-2xl",
      title: "font-bold text-xl max-md:text-base",
      regular: "font-medium text-lg max-md:text-base",
      small: "text-base",
      xsmall: "text-sm",
    },
  },
  defaultVariants: {
    variant: "small",
  },
});

const Text: React.FC<TextProps> = ({ variant, className, children }) => {
  const Comp = variantMapping[variant || "small"];
  return (
    <Comp className={cn(textVariants({ variant, className }))}>{children}</Comp>
  );
};

Text.displayName = "Text";

export default Text;
