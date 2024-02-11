import React from "react";

import Text from "@/components/Text";
import { cn } from "@/utils/classnameMerge";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isError?: boolean;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  className,
  id,
  label,
  errorMessage,
  isError,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2.5">
      {label && (
        <label htmlFor={id} className="flex gap-0.5">
          <Text variant="regular" className="text-black">
            {label}
          </Text>
          {props.required && (
            <Text variant="regular" className="text-smouldering-red">
              *
            </Text>
          )}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type="text"
          className={cn(
            "w-full rounded-lg border border-clouded-vision bg-white p-2.5 text-base max-md:text-sm text-black/90 placeholder:text-black/30 outline-none focus-visible:border-ultramarine-shadow focus-visible:ring-transparent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:border-baby-talk-grey disabled:bg-baby-talk-grey/60",
            isError && "border-red-600",
            className
          )}
          {...props}
        />
        {isError && (
          <Text variant="xsmall" className="text-red-600">
            {errorMessage || "This field is required"}
          </Text>
        )}
      </div>
    </div>
  );
};

export default Input;
