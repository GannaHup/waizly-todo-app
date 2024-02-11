import React, { useMemo } from "react";

import { IconProps } from "./types";

const TrashIcon: React.FC<IconProps> = ({ color, height = 18, width = 18 }) => {
  const iconColor = useMemo(() => color, [color]);
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 14 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <desc />
      <defs />
      <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
        <g fill={iconColor} transform="translate(-299.000000, -129.000000)">
          <g transform="translate(299.000000, 129.000000)">
            <path d="M1,16 C1,17.1 1.9,18 3,18 L11,18 C12.1,18 13,17.1 13,16 L13,4 L1,4 L1,16 L1,16 Z M14,1 L10.5,1 L9.5,0 L4.5,0 L3.5,1 L0,1 L0,3 L14,3 L14,1 L14,1 Z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default TrashIcon;
