import Image from "next/image";

import IllustrationDataNotFound from "@/assets/svg/ill-data-not-found.svg";
import Text from "@/components/Text";
import { cn } from "@/utils/classnameMerge";

interface EmptyStateProps {
  title?: string;
  description?: string;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn("w-[400px] flex flex-col items-center gap-2", className)}
    >
      <Image src={IllustrationDataNotFound} alt="Illustration Data Not Found" />
      {title && (
        <Text variant="heading-2" className="text-center">
          {title}
        </Text>
      )}
      {description && (
        <Text variant="small" className="text-center text-gray-500">
          {description}
        </Text>
      )}
    </div>
  );
};

export default EmptyState;
