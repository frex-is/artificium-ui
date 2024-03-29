import * as React from "react";
import { SVGProps } from "react";

export const PlusCircleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 8v4m0 0v4m0-4h4m-4 0H8m13 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
