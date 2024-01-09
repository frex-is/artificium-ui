import * as React from "react";
import { SVGProps } from "react";

export const FolderIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 7.5h-6.35a1 1 0 0 1-.914-.594L10.89 5M19 7.5v0a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4.35a1 1 0 0 1 .914.594L10.889 5M19 7.5V6a1 1 0 0 0-1-1h-7.111"
    />
  </svg>
);
