import * as React from "react";
const SvgCheckSquare = props => (
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
      d="m8 12 2.293 2.293a1 1 0 0 0 1.414 0L16 10M6 21h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3Z"
    />
  </svg>
);
export default SvgCheckSquare;

