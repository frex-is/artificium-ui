import * as React from "react";
import { SVGProps } from "react";

export const EditIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 19h-7.5M4 15.852V18.8c0 .11.09.2.2.2h2.948a.2.2 0 0 0 .141-.059L17.86 8.372a.2.2 0 0 0 0-.283L14.91 5.141a.2.2 0 0 0-.283 0l-10.57 10.57a.2.2 0 0 0-.058.141Z"
    />
  </svg>
);
