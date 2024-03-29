import * as React from "react";
import { SVGProps } from "react";

export const CalendarEditIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
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
      d="M7 5H6a3 3 0 0 0-3 3v2m4-5V3m0 2h10m0 0h1a3 3 0 0 1 3 3v2m-4-5V3M3 10v8a3 3 0 0 0 3 3h6M3 10h18m0 0v2M7 14h2m13 3-4.586 4.586a1.41 1.41 0 0 1-1 .414v0A1.414 1.414 0 0 1 15 20.586v0c0-.375.149-.735.414-1L20 15a1.414 1.414 0 1 1 2 2Z"
    />
  </svg>
);
