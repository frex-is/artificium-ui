import * as React from "react";
import { SVGProps } from "react";

export const ArrowDownLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.636 18.364V9.879m0 8.485h8.486m-8.486 0L18.364 5.636"
    />
  </svg>
);
