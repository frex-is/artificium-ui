import * as React from "react";
import { SVGProps } from "react";

export const ArrowUpTinyIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 7 4 3.333M12 7l-4 3.333M12 7v10"
    />
  </svg>
);
