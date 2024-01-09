import * as React from "react";
import { SVGProps } from "react";

export const ZoomOutIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m20 20-3.585-3.585m0 0A7.273 7.273 0 1 0 6.13 6.13a7.273 7.273 0 0 0 10.285 10.285Zm-2.642-5.142h-5"
    />
  </svg>
);
