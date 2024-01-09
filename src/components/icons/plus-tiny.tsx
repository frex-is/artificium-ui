import * as React from "react";
import { SVGProps } from "react";

export const PlusTinyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M12 8v4m0 0v4m0-4h4m-4 0H8"
    />
  </svg>
);
