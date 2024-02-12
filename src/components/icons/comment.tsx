import * as React from "react";
const SvgComment = props => (
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
      d="M18 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1.039a2 2 0 0 1 1.561.75l1.838 2.298a2 2 0 0 0 3.124 0L15.4 17.75A2 2 0 0 1 16.96 17H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z"
    />
  </svg>
);
export default SvgComment;

