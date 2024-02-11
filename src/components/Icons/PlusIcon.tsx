import React, { useMemo } from "react";

import { IconProps } from "./types";

const PlusIcon: React.FC<IconProps> = ({ color, height = 18, width = 18 }) => {
  const iconColor = useMemo(() => color, [color]);
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="none" height="256" width="256" />
      <path
        d="M216,120H136V40a8,8,0,0,0-16,0v80H40a8,8,0,0,0,0,16h80v80a8,8,0,0,0,16,0V136h80a8,8,0,0,0,0-16Z"
        fill={iconColor}
      />
    </svg>
  );
};

export default PlusIcon;
