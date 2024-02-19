import * as React from "react";
import { SVGProps } from "react";

export const UserCrossIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 15h-2a6 6 0 0 0-6 6m11-5 3 3m0 0 3 3m-3-3 3-3m-3 3-3 3m0-15a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
    />
  </svg>
);
