import * as React from "react";
import { SVGProps } from "react";

export const RotateLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 12a9 9 0 1 0 2.636-6.364L4.5 7m4 0h-4m0 0V3"
    />
  </svg>
);
