import * as React from "react";
const SvgCompass = props => (
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
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"
    />
    <path
      stroke="#686B6E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.5 15.5 10 10l5.5-1.5L14 14z"
    />
  </svg>
);
export default SvgCompass;

