import * as React from "react";
import { SVGProps } from "react";

export const DoubleChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.586 6-5.293 5.293a1 1 0 0 0 0 1.414L10.586 18m8-12-5.293 5.293a1 1 0 0 0 0 1.414L18.586 18"
    />
  </svg>
);
