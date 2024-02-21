import * as React from "react";
import { SVGProps } from "react";

export const CrossHexagonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9 9 3 3m0 0 3 3m-3-3 3-3m-3 3-3 3M4.206 9.232v5.536a3 3 0 0 0 1.5 2.598l4.794 2.768a3 3 0 0 0 3 0l4.794-2.768a3 3 0 0 0 1.5-2.598V9.232a3 3 0 0 0-1.5-2.598L13.5 3.866a3 3 0 0 0-3 0L5.706 6.634a3 3 0 0 0-1.5 2.598Z"
    />
  </svg>
);
