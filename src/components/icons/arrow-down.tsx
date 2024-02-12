import * as React from "react";
const SvgArrowDown = props => (
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
      d="m12 21 6-6m-6 6-6-6m6 6V3"
    />
  </svg>
);
export default SvgArrowDown;

