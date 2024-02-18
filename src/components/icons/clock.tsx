import * as React from "react";
import { SVGProps } from "react";

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 8v3.172a2 2 0 0 1-.586 1.414L10 14m11-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
    />
  </svg>
);
