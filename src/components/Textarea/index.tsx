import React from "react";

import Text from "@/components/Text";
import { cn } from "@/utils/classnameMerge";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  isError?: boolean;
  errorMessage?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  className,
  label,
  isError,
  errorMessage,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={props.id} className="flex gap-0.5">
        <Text variant="regular" className="text-black">
          {label}
        </Text>
        {props.required && (
          <Text variant="regular" className="text-smouldering-red">
            *
          </Text>
        )}
      </label>
      <textarea
        className={cn(
          "w-full h-56 rounded-[5px] resize-y border border-mercury bg-white p-2.5 text-lg text-black/90 placeholder:text-black/30 outline-none focus-visible:border-ultramarine-shadow focus-visible:ring-transparent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:border-baby-talk-grey disabled:bg-baby-talk-grey/60",
          isError && "border-red-600",
          className
        )}
        {...props}
      />
      {isError && (
        <Text variant="xsmall" className="text-red-600">
          {errorMessage || "This fill is required"}
        </Text>
      )}
    </div>
  );
};

export default Textarea;
