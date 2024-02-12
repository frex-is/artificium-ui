import * as React from "react";
const SvgCalendarLine = props => (
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
      strokeWidth={1.5}
      d="M7 5H6a3 3 0 0 0-3 3v2m4-5V3m0 2h10m0 0h1a3 3 0 0 1 3 3v2m-4-5V3M3 10v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8M3 10h18M8 15.5h8"
    />
  </svg>
);
export default SvgCalendarLine;

