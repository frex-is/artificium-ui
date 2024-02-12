import * as React from "react";
const SvgCrop = props => (
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
      d="M6 3v13a2 2 0 0 0 2 2h6.571M21 18h-3m0 3V8a2 2 0 0 0-2-2h-5.5M3 6h3m5 8h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1"
    />
  </svg>
);
export default SvgCrop;

