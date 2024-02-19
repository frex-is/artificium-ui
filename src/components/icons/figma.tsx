import * as React from "react";
import { SVGProps } from "react";

export const FigmaIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3H9a3 3 0 0 0 0 6m3-6v6m0-6h3a3 3 0 1 1 0 6m-3 0H9m3 0v6m0-6h3M9 9a3 3 0 1 0 0 6m3 0H9m3 0v3a3 3 0 1 1-3-3m6-6a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
    />
  </svg>
);
