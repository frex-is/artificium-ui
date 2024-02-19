import * as React from "react";
import { SVGProps } from "react";

export const FaceSadIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 15.354A4 4 0 0 1 12 14a4 4 0 0 1 3 1.354M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M10 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
