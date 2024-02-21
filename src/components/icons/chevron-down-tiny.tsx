import * as React from "react";
import { SVGProps } from "react";

export const ChevronDownTinyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m16 11-3.36 2.8a1 1 0 0 1-1.28 0L8 11"
    />
  </svg>
);
