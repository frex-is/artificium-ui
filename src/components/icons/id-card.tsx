import * as React from "react";
const SvgIdCard = props => (
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
      d="M15 7h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3M9 7H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3m0 0h6m-6 0v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1m-2-7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3-5h4a1 1 0 0 0 1-1V6a3 3 0 1 0-6 0v2a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgIdCard;

