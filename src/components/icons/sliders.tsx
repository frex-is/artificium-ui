import * as React from "react";
import { SVGProps } from "react";

export const SlidersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#686B6E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 6h10m8 0h-4M3 12h4m14 0H11m-8 6h12m6 0h-2m-8-6a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m10-6a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m6 12a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0"
    />
  </svg>
);
