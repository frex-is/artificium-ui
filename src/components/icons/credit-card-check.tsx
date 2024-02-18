import * as React from "react";
import { SVGProps } from "react";

export const CreditCardCheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 8.5V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.5m-18 0h18m-18 0V17a2 2 0 0 0 2 2h7m9-10.5V12M6 16h4m5 3 2.293 2.293a1 1 0 0 0 1.414 0L23 17"
    />
  </svg>
);
