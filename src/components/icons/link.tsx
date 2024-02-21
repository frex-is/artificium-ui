import * as React from "react";
import { SVGProps } from "react";

export const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9 15 6-6m-.683 8.227-1.59 1.591v0a4.5 4.5 0 0 1-6.365 0l-.908-.908a4.5 4.5 0 0 1 0-6.364v0l1.591-1.591m10.454 4.09 1.591-1.59v0a4.5 4.5 0 0 0 0-6.365l-.908-.908a4.5 4.5 0 0 0-6.364 0v0l-1.591 1.591"
    />
  </svg>
);
