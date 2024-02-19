import * as React from "react";
import { SVGProps } from "react";

export const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4m8 1-4-4m4 4 4-4m-4 4V4"
    />
  </svg>
);
