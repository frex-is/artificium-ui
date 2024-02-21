import * as React from "react";
import { SVGProps } from "react";

export const UserLoveIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 15h-2a6 6 0 0 0-6 6M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m5.804 10.04a1.58 1.58 0 0 0-2.18 0l-.61.583a.02.02 0 0 1-.028 0l-.61-.583a1.578 1.578 0 0 0-2.18 2.283l2.277 2.174a.764.764 0 0 0 1.054 0l2.277-2.174a1.58 1.58 0 0 0 0-2.283"
    />
  </svg>
);
