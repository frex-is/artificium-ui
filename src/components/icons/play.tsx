import * as React from "react";
import { SVGProps } from "react";

export const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
    <path
      stroke="#686B6E"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 9.414c0-.89 1.077-1.337 1.707-.707l2.586 2.586a1 1 0 0 1 0 1.414l-2.586 2.586c-.63.63-1.707.184-1.707-.707V9.414Z"
    />
  </svg>
);
