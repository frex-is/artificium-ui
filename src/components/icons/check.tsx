import * as React from "react";
import { SVGProps } from "react";

export const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={props.stroke || "#686B6E"}
      strokeLinecap="round"
      strokeWidth={props.strokeWidth || 1.5}
      d="m3 10.8 6.02 6.422a1 1 0 0 0 1.46 0L21 6"
    />
  </svg>
);
