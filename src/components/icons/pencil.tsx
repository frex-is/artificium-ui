import * as React from "react";
import { SVGProps } from "react";

export const PencilIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13 7-8.414 8.414A2 2 0 0 0 4 16.828V18a2 2 0 0 0 2 2h1.172a2 2 0 0 0 1.414-.586L17 11m-4-4 1.586-1.586a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L17 11m-4-4 4 4"
    />
  </svg>
);
