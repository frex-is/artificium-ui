import * as React from "react";
import { SVGProps } from "react";

export const DistortionIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22v-3m0-17v3m0 0-5.752-.719A2 2 0 0 0 4 6.266v11.468a2 2 0 0 0 2.248 1.985L12 19m0-14v14m3.124-13.61 3.124.391A2 2 0 0 1 20 7.766v8.468a2 2 0 0 1-1.752 1.985l-3.124.39"
    />
  </svg>
);
