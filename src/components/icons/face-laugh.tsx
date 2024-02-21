import * as React from "react";
import { SVGProps } from "react";

export const FaceLaughIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
    />
    <path
      stroke="#686B6E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.706 14c-1.307 0-2.221 1.312-1.2 2.127.684.547 1.55.873 2.494.873.943 0 1.81-.326 2.494-.873 1.021-.815.107-2.127-1.2-2.127zM10 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
    <path
      stroke="#686B6E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M15 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
    />
  </svg>
);
