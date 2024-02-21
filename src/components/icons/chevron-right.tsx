import * as React from "react";
import { SVGProps } from "react";

export const ChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9 6 5.293 5.293a1 1 0 0 1 0 1.414L9 18"
    />
  </svg>
);
