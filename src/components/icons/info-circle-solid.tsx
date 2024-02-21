import * as React from "react";
import { SVGProps } from "react";

export const InfoCircleSolidIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#686B6E"
      fillRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m10-5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm1 5a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0z"
      clipRule="evenodd"
    />
  </svg>
);
