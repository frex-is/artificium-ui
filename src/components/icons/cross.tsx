import * as React from "react";
import { SVGProps } from "react";

export const CrossIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="m5 5 14 14m0-14L5 19"
    />
  </svg>
);
