import * as React from "react";
import { SVGProps } from "react";

export const HeartCrossedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.684 19.247a2.334 2.334 0 0 1-3.368 0l-6.3-6.561A4.53 4.53 0 0 1 3.023 8M2 2l3.414 3.414M22 22l-5.591-5.591M5.414 5.414a4.535 4.535 0 0 1 5.142.991L11.96 7.87a.054.054 0 0 0 .078 0l1.405-1.464a4.534 4.534 0 1 1 6.54 6.28L16.41 16.41M5.414 5.414 16.41 16.41"
    />
  </svg>
);
