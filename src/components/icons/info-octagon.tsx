import * as React from "react";
import { SVGProps } from "react";

export const InfoOctagonIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 16v-4m0-4h.01m3.662 13a2 2 0 0 0 1.414-.586l3.328-3.328A2 2 0 0 0 21 15.672V8.328a2 2 0 0 0-.586-1.414l-3.328-3.328A2 2 0 0 0 15.672 3H8.328a2 2 0 0 0-1.414.586L3.586 6.914A2 2 0 0 0 3 8.328v7.344a2 2 0 0 0 .586 1.414l3.328 3.328A2 2 0 0 0 8.328 21z"
    />
  </svg>
);
