import * as React from "react";
import { SVGProps } from "react";

export const AlertTriangleIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 9v4m0 4h.01m5.916 4H6.074c-2.282 0-3.729-2.446-2.629-4.446l6.802-12.368c.76-1.381 2.745-1.381 3.505 0l6.803 12.368c1.1 2-.347 4.446-2.629 4.446Z"
    />
  </svg>
);
