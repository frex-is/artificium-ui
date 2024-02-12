import * as React from "react";
const SvgSun = props => (
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
      d="M20.75 12h-1.875m-.688-6.187-1.326 1.326M12 3.25v1.875m-6.187.688 1.326 1.326M3.25 12h1.875m.688 6.187 1.326-1.326M12 20.75v-1.875m6.187-.688-1.326-1.326M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
    />
  </svg>
);
export default SvgSun;

