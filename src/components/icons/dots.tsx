import * as React from "react";
import { SVGProps } from "react";

export const DotsIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM14.5 16.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
  </svg>
);
