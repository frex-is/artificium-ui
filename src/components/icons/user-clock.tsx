import * as React from "react";
import { SVGProps } from "react";

export const UserClockIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 15a6 6 0 0 0-6 6m13-4.6v.772a2 2 0 0 0 .586 1.414l.214.214M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m6 11c0 .9-.298 1.732-.8 2.4A4 4 0 0 1 18 22a4 4 0 0 1-3.2-1.6c-.502-.668-.8-1.5-.8-2.4s.298-1.732.8-2.4A4 4 0 0 1 18 14c1.309 0 2.47.628 3.2 1.6.502.668.8 1.5.8 2.4"
    />
  </svg>
);
