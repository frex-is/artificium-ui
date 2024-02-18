import * as React from "react";
import { SVGProps } from "react";

export const ClockCrossedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 12V8M5.636 5.636 2 2l20 20-3.636-3.636M5.636 5.636a9 9 0 1 1 12.728 12.728M5.636 5.636l12.728 12.728M15 20.488A9 9 0 0 1 3.512 9"
    />
  </svg>
);
