import * as React from "react";
import { SVGProps } from "react";

export const HexagonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.5 3.866a3 3 0 0 1 3 0l4.794 2.768a3 3 0 0 1 1.5 2.598v5.536a3 3 0 0 1-1.5 2.598L13.5 20.134a3 3 0 0 1-3 0l-4.794-2.768a3 3 0 0 1-1.5-2.598V9.232a3 3 0 0 1 1.5-2.598z"
    />
  </svg>
);
