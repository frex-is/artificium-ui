import * as React from "react";
import { SVGProps } from "react";

export const Pin03Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.15 11.9c2.328.903 3.85 2.403 3.85 4.1 0 2.761-4.03 5-9 5s-9-2.239-9-5c0-1.7 1.528-3.203 3.863-4.106m10.287.005a9 9 0 0 0 .616-1.617c.153-.56.234-1.117.234-1.668C18 5.514 15.314 3 12 3S6 5.514 6 8.614c0 1.054.297 2.13.824 3.201q.018.04.039.08m10.287.004c-.767 1.565-1.978 3.007-3.489 4.45-.907.868-2.415.868-3.322 0-1.49-1.424-2.713-2.934-3.476-4.455M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
