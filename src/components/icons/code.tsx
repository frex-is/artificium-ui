import * as React from "react";
import { SVGProps } from "react";

export const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7 8-3.293 3.293a1 1 0 0 0 0 1.414L7 16m10-8 3.293 3.293a1 1 0 0 1 0 1.414L17 16M14 6l-4 12"
    />
  </svg>
);
