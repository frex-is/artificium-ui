import * as React from "react";
import { SVGProps } from "react";

export const MicrophoneIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6 10v1a6 6 0 0 0 6 6m6-7v1a6 6 0 0 1-6 6m0 0v4m0 0h4m-4 0H8m4-7a3 3 0 0 1-3-3V6a3 3 0 1 1 6 0v5a3 3 0 0 1-3 3Z"
    />
  </svg>
);
