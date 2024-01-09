import * as React from "react";
import { SVGProps } from "react";

export const AttachmentIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m7.222 14.728 5.48-5.48a1.75 1.75 0 0 1 2.475 0v0a1.75 1.75 0 0 1 0 2.475l-5.48 5.48a3.5 3.5 0 0 1-4.95 0v0a3.5 3.5 0 0 1 0-4.95l6.54-6.54a5.25 5.25 0 0 1 7.425 0v0a5.25 5.25 0 0 1 0 7.424l-6.54 6.54"
    />
  </svg>
);
