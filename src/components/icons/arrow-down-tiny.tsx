import * as React from "react";
import { SVGProps } from "react";

export const ArrowDownTinyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 17 4-3.333M12 17l-4-3.333M12 17V7"
    />
  </svg>
);
