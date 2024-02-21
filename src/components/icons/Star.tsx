import * as React from "react";
import { SVGProps } from "react";

export const StarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11.08 4.64a.98.98 0 0 1 1.84 0l1.48 3.72a1 1 0 0 0 .84.637l3.843.322c.882.074 1.24 1.225.568 1.827l-2.928 2.62a1.07 1.07 0 0 0-.321 1.031l.895 3.918c.205.9-.732 1.611-1.488 1.13l-3.29-2.1a.96.96 0 0 0-1.038 0l-3.29 2.1c-.756.482-1.693-.23-1.488-1.13l.895-3.918a1.07 1.07 0 0 0-.32-1.03l-2.929-2.621c-.672-.602-.314-1.753.568-1.827l3.843-.322a1 1 0 0 0 .84-.637z"
    />
  </svg>
);
