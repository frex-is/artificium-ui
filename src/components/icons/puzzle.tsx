import * as React from "react";
import { SVGProps } from "react";

export const PuzzleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 17a2 2 0 0 0 2 2h2a3 3 0 1 0 6 0h2a2 2 0 0 0 2-2v-2a3 3 0 1 0 0-6V7a2 2 0 0 0-2-2h-2a3 3 0 1 0-6 0H6a2 2 0 0 0-2 2v2a3 3 0 1 1 0 6z"
    />
  </svg>
);
