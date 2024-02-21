import * as React from "react";
import { SVGProps } from "react";

export const TriangleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.074 21h11.852c2.282 0 3.729-2.446 2.629-4.446L13.752 4.186c-.76-1.381-2.745-1.381-3.504 0L3.445 16.554c-1.1 2 .347 4.446 2.629 4.446Z"
    />
  </svg>
);
