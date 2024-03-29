import * as React from "react";
import { SVGProps } from "react";

export const InfoCircleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M12 16v-4m0-4h.01M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"
    />
  </svg>
);
