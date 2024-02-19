import * as React from "react";
import { SVGProps } from "react";

export const ThunderIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.073 9.905a1 1 0 0 1-1-1V3l-5.264 9.626a1 1 0 0 0 .877 1.48h3.21a1 1 0 0 1 1 1V21l5.289-9.613a1 1 0 0 0-.877-1.482z"
    />
  </svg>
);
