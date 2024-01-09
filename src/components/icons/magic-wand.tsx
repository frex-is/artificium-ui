import * as React from "react";
import { SVGProps } from "react";

export const MagicWandIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.5 10.5 2.086-2.086a2 2 0 0 1 2.828 0l.172.172a2 2 0 0 1 0 2.828L13.5 13.5m-3-3-7.086 7.086a2 2 0 0 0 0 2.828l.172.172a2 2 0 0 0 2.828 0L13.5 13.5m-3-3 3 3M8.3 8.357 6 7.385m5.34-2.07L10.41 3m5.236 2.315L16.576 3m2.109 5.354 2.305-.96m-2.305 5.252L21 13.58m-5.358 2.107L16.575 18"
    />
  </svg>
);
