import * as React from "react";
import { SVGProps } from "react";

export const RotateRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 12a9 9 0 1 1-2.636-6.364L19.5 7m-4 0h4m0 0V3"
    />
  </svg>
);
