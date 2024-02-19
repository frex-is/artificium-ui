import * as React from "react";
import { SVGProps } from "react";

export const UserIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19 21a6 6 0 0 0-6-6h-2a6 6 0 0 0-6 6M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
    />
  </svg>
);
