import * as React from "react";
import { SVGProps } from "react";

export const CalendarEmptyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 5H5a2 2 0 0 0-2 2v3m4-5V3m0 2h10m0 0h2a2 2 0 0 1 2 2v3m-4-5V3M3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9M3 10h18"
    />
  </svg>
);
