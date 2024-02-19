import * as React from "react";
import { SVGProps } from "react";

export const MailIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4 6 6 6m10-6-6 6m-4 0 .586.586a2 2 0 0 0 2.828 0L14 12m-4 0-6.121 6.121M14 12l6.121 6.121m0 0A3 3 0 0 0 21 16V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9c0 .828.336 1.578.879 2.121m16.242 0A3 3 0 0 1 18 19H6a3 3 0 0 1-2.121-.879"
    />
  </svg>
);
