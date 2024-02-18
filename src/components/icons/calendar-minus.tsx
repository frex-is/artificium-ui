import * as React from "react";
import { SVGProps } from "react";

export const CalendarMinusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 5H6a3 3 0 0 0-3 3v2m4-5V3m0 2h10m0 0h1a3 3 0 0 1 3 3v2m-4-5V3M3 10v8a3 3 0 0 0 3 3h6M3 10h18m0 0v2M7 14h2m12 5h-4"
    />
  </svg>
);
