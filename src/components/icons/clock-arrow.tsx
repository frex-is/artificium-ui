import * as React from "react";
import { SVGProps } from "react";

export const ClockArrowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 12a9 9 0 1 1-2.636-6.364M16.5 7h2.75a.25.25 0 0 0 .25-.25V4M12 8v3.172a2 2 0 0 1-.586 1.414L10 14"
    />
  </svg>
);
