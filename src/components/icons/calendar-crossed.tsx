import * as React from "react";
import { SVGProps } from "react";

export const CalendarCrossedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 21H6a3 3 0 0 1-3-3v-8m4-5H6a3 3 0 0 0-.871.129M7 5V3m0 2h10m0 0h1a3 3 0 0 1 3 3v2m-4-5V3M3 10V8.5M3 10h2.5M21 10v8a3 3 0 0 1-.879 2.121M21 10H10M2 2l3.129 3.129m0 0L10 10m0 0 10.121 10.121m0 0L22 22"
    />
  </svg>
);
