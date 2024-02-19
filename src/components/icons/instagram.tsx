import * as React from "react";
import { SVGProps } from "react";

export const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 7h.01M8 21h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5Zm8-9a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </svg>
);
