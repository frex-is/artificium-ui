import * as React from "react";
import { SVGProps } from "react";

export const UserCircleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 19.5V19a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v.5m8-9.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
    />
  </svg>
);
