import * as React from "react";
import { SVGProps } from "react";

export const ChatBubbleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M18 3H6a3 3 0 0 0-3 3v9.757a3 3 0 0 0 .879 2.122l2.84 2.84A.75.75 0 0 0 8 20.19V19a2 2 0 0 1 2-2h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z"
    />
  </svg>
);
