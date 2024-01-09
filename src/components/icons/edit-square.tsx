import * as React from "react";
import { SVGProps } from "react";

export const EditSquareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6m4 18v-3a2 2 0 0 1 2-2h3m-5 5h.757a3 3 0 0 0 2.122-.879l1.242-1.242A3 3 0 0 0 21 16.757V16m0 0v-4m-12 .314V14.8c0 .11.09.2.2.2h2.486a.2.2 0 0 0 .142-.059l9.03-9.03a.2.2 0 0 0 0-.283L18.373 3.14a.2.2 0 0 0-.283 0l-9.03 9.031a.2.2 0 0 0-.059.142Z"
    />
  </svg>
);
