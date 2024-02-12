import * as React from "react";
const SvgChevronUp = props => (
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
      d="m18 15-5.293-5.293a1 1 0 0 0-1.414 0L6 15"
    />
  </svg>
);
export default SvgChevronUp;

