import * as React from "react";
import { SVGProps } from "react";

export const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill ?? "#E26F20"}
      d="M9.234 7.66c.226-.359-.146-.76-.567-.704a5 5 0 0 1-5.623-5.623C3.1.913 2.7.54 2.34.766A5 5 0 1 0 9.235 7.66Z"
    />
  </svg>
);
