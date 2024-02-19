import * as React from "react";
import { SVGProps } from "react";

export const UserCrossedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.825 10.825 22 22M10.825 10.825A4 4 0 1 0 8 7c0 .4.12.953.179 1.179m2.646 2.646L8.179 8.179M2 2l6.179 6.179M10 15.083A6 6 0 0 0 5 21"
    />
  </svg>
);
