import * as React from "react";
import { SVGProps } from "react";

export const EyeCrossIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.586 10.586a2 2 0 1 1 2.828 2.828m-2.828-2.828 2.828 2.828m-2.828-2.828L7.618 7.618m5.796 5.796 2.968 2.968M21 21l-4.618-4.618m0 0a8 8 0 0 0 1.275-1.039L21 12l-3.343-3.343A8 8 0 0 0 7.618 7.618m0 0L3 3m2 7-2 2 3.343 3.343A7.99 7.99 0 0 0 13 17.623"
    />
  </svg>
);
