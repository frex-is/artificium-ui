import * as React from "react";
import { SVGProps } from "react";

export const BulbIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.571 16v1.571A3.429 3.429 0 0 0 12 21v0a3.429 3.429 0 0 0 3.429-3.429V16M8.57 16v-.65c0-.64-.323-1.229-.773-1.686A6.318 6.318 0 0 1 6 9.222C6 5.786 8.686 3 12 3s6 2.786 6 6.222c0 1.74-.688 3.313-1.798 4.442-.45.457-.773 1.045-.773 1.687V16M8.57 16h6.858"
    />
  </svg>
);
