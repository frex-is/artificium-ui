import * as React from "react";
import { SVGProps } from "react";

export const ArrowUpLeftTinyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m8.465 8.464-.472 5.186m.472-5.186 5.185-.47m-5.185.47 7.07 7.072"
    />
  </svg>
);
