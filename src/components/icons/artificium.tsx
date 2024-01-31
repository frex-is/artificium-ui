import * as React from "react";
import { SVGProps } from "react";

export const ArtificiumIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    {...props}
  >
    <path
      stroke="#686B6E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.422 7.308 5.359 10.72c.682 1.365-.31 2.972-1.837 2.972h-3.522m0-13.692-1.586-3.173c-.756-1.513-2.916-1.513-3.672 0L3.219 18.028C2.537 19.393 3.53 21 5.056 21h3.522m6.844-13.692L12 10.73M8.578 21h6.844m-6.844 0-3.422-3.423M15.422 21l-6.844-6.846M12 10.73l8.726 8.729M12 10.73l-3.422 3.424M3.274 19.46l1.882-1.883m0 0 3.422-3.423"
    />
  </svg>
);
