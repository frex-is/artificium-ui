import * as React from "react";
import { SVGProps } from "react";

export const ArrowLeftTinyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7 12 3.333-4M7 12l3.333 4M7 12h10"
    />
  </svg>
);
