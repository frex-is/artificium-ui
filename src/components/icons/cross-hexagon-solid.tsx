import * as React from "react";
import { SVGProps } from "react";

export const CrossHexagonSolidIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#686B6E"
      fillRule="evenodd"
      d="M10 3a4 4 0 0 1 4 0l4.794 2.768a4 4 0 0 1 2 3.464v5.536a4 4 0 0 1-2 3.464L14 21a4 4 0 0 1-4 0l-4.794-2.768a4 4 0 0 1-2-3.464V9.232a4 4 0 0 1 2-3.464zm-.293 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586z"
      clipRule="evenodd"
    />
  </svg>
);
