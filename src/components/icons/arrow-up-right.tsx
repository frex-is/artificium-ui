import * as React from "react";
import { SVGProps } from "react";

export const ArrowUpRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.364 5.636v8.485m0-8.485H9.88m8.485 0L5.636 18.364"
    />
  </svg>
);
