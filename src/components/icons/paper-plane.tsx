import * as React from "react";
import { SVGProps } from "react";

export const PaperPlaneIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9.73 14.27 9.504-9.504M5.487 7.998l11.648-3.883c1.7-.566 3.316 1.05 2.75 2.75l-3.883 11.648c-.612 1.838-3.14 2.017-4.007.285l-1.94-3.88a2.173 2.173 0 0 0-.972-.973l-3.881-1.94c-1.732-.866-1.553-3.394.285-4.007Z"
    />
  </svg>
);
