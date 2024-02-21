import * as React from "react";
import { SVGProps } from "react";

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5v7m0 0v7m0-7h7m-7 0H5"
    />
  </svg>
);
