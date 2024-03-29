import * as React from "react";
import { SVGProps } from "react";

export const ArrowUpLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.636 5.636v8.485m0-8.485h8.486m-8.486 0 12.728 12.728"
    />
  </svg>
);
