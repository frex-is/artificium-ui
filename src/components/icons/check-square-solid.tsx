import * as React from "react";
import { SVGProps } from "react";

export const CheckSquareSolidIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#686B6E"
      fillRule="evenodd"
      d="M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4zm14.707 4.707a1 1 0 0 0-1.414-1.414L11 13.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L9.586 15a2 2 0 0 0 2.828 0z"
      clipRule="evenodd"
    />
  </svg>
);
