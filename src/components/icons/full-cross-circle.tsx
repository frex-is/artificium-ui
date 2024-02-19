import * as React from "react";
import { SVGProps } from "react";

export const FullCrossCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#686B6E"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.636 5.636 12 12m0 0 6.364 6.364M12 12l6.364-6.364M12 12l-6.364 6.364M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
