import * as React from "react";
import { SVGProps } from "react";

export const UserPlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13 15h-2a6 6 0 0 0-6 6m17-2h-6m3 3v-6m-3-9a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
    />
  </svg>
);
