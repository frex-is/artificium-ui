import * as React from "react";
import { SVGProps } from "react";

export const UserEditIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 15h-2a6 6 0 0 0-6 6M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m6 10-4.586 4.586a1.41 1.41 0 0 1-1 .414v0A1.414 1.414 0 0 1 15 20.586v0c0-.375.149-.735.414-1L20 15a1.414 1.414 0 1 1 2 2"
    />
  </svg>
);
