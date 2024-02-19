import * as React from "react";
import { SVGProps } from "react";

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.2 21h3.5a.25.25 0 0 0 .25-.25v-7.454a.25.25 0 0 1 .25-.25h2.134a.25.25 0 0 0 .247-.213l.377-2.562a.25.25 0 0 0-.247-.286H14.2a.25.25 0 0 1-.25-.25V6.497a.25.25 0 0 1 .25-.25h2.55a.25.25 0 0 0 .25-.25V3.25a.25.25 0 0 0-.25-.25h-2.8a4 4 0 0 0-4 4v2.735a.25.25 0 0 1-.25.25H7.25a.25.25 0 0 0-.25.25v2.515c0 .138.112.25.25.25H9.7a.25.25 0 0 1 .25.25v7.5c0 .138.112.25.25.25"
    />
  </svg>
);
