import * as React from "react";
import { SVGProps } from "react";

export const RotateIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 12h2m18 0h-2m0 0v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6m16 0H4m0-3V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"
    />
  </svg>
);
