import * as React from "react";
import { SVGProps } from "react";

export const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 17h4m4 4H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 .879-2.121l6-6a3 3 0 0 1 4.242 0l6 6A3 3 0 0 1 21 12v6a3 3 0 0 1-3 3"
    />
  </svg>
);
