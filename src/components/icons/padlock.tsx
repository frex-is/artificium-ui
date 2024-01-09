import * as React from "react";
import { SVGProps } from "react";

export const PadLockIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 10V8a4 4 0 1 1 8 0v2m-4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 0v2m-5 3h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Z"
    />
  </svg>
);
