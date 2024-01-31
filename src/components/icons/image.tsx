import * as React from "react";
import { SVGProps } from "react";

export const ImageIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 16v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3M3 16V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11M3 16l4.586-4.586a2 2 0 0 1 2.828 0L14 15m3 3-3-3m0 0 1.586-1.586a2 2 0 0 1 2.828 0L21 16m-3-8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
  </svg>
);
