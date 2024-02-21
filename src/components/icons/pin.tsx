import * as React from "react";
import { SVGProps } from "react";

export const PinIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 10.2c0 3.303-2.07 6.776-5.062 9.92a2.67 2.67 0 0 1-3.876 0C7.07 16.975 5 13.502 5 10.2 5 6.224 8.134 3 12 3s7 3.224 7 7.2Z"
    />
    <path
      stroke="#686B6E"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
