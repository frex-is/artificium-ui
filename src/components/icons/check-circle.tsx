import * as React from "react";
const SvgCheckCircle = props => (
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
      d="m8 12 2.293 2.293a1 1 0 0 0 1.414 0L16 10m5 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
export default SvgCheckCircle;

