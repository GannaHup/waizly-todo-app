import React, { useEffect, useState } from "react";

import Button from "@/components/Button";
import Text from "@/components/Text";
import { cn } from "@/utils/classnameMerge";

export interface ModalProps {
  caption?: string;
  children?: React.ReactNode;
  description?: string;
  isVisible: boolean;
  textButtonPrimary?: string;
  textButtonSecondary?: string;
  title?: string;
  onClose?: () => void;
  onAction?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  caption,
  children,
  description,
  isVisible,
  textButtonPrimary,
  textButtonSecondary,
  title,
  onClose,
  onAction,
}) => {
  const [animationStyle, setAnimationStyle] = useState({
    transform: isVisible ? "scale(1)" : "scale(0)",
    transition: "transform 0.5s ease-in-out",
  });

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflowY = "hidden";
      setAnimationStyle({
        transform: "scale(1)",
        transition: "transform 0.25s ease-in-out",
      });
    } else {
      document.body.style.removeProperty("overflow-y");
      setAnimationStyle({
        transform: "scale(0)",
        transition: "transform 0.25s ease-in-out",
      });
    }
  }, [isVisible]);

  return (
    <div
      className={cn(
        "transition-all duration-500 z-50 w-screen h-screen fixed bg-black/10 flex justify-center items-center top-0 left-0",
        !isVisible && "hidden"
      )}
    >
      <div
        className="bg-white flex p-6 rounded-2xl justify-start items-start max-md:p-4"
        style={animationStyle}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative">
          {children ? (
            children
          ) : (
            <div className="w-[360px] max-md:w-[280px] flex flex-col gap-3">
              <Text className="text-center" variant="title">
                {title}
              </Text>
              <Text className="text-center">{description}</Text>
              {caption && (
                <Text
                  variant="regular"
                  className="text-gray-700 text-center mt-4"
                >
                  &quot;{caption}&quot;
                </Text>
              )}

              <div className="flex justify-between gap-3 mt-10 max-md:flex-col-reverse">
                {textButtonSecondary && (
                  <Button
                    variant="primary-outline"
                    size="small"
                    className="max-md:px-6"
                    onClick={onClose}
                  >
                    {textButtonSecondary}
                  </Button>
                )}

                {textButtonPrimary && (
                  <Button
                    variant="primary"
                    size="small"
                    className="max-md:px-6"
                    onClick={onAction}
                  >
                    {textButtonPrimary}
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
