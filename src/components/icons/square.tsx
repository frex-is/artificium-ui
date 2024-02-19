import * as React from "react";
import { SVGProps } from "react";

export const SquareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={18}
      height={18}
      x={3}
      y={3}
      stroke="#686B6E"
      strokeLinecap="round"
      strokeWidth={1.5}
      rx={3}
    />
  </svg>
);
