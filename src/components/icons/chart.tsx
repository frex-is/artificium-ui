import * as React from "react";
const SvgChart = props => (
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
      d="M5.55 8.55A6.98 6.98 0 0 0 3.5 13.5c0 1.933.784 3.683 2.05 4.95m0-9.9a6.98 6.98 0 0 1 3.953-1.98c.547-.078.997.378.997.93v6M5.55 8.55l4.95 4.95m0 0-4.95 4.95m4.95-4.95h6c.552 0 1.008.45.93.997A7.001 7.001 0 0 1 5.55 18.45m8.947-14.88a7 7 0 0 1 5.933 5.933c.078.547-.378.997-.93.997h-5a1 1 0 0 1-1-1v-5c0-.552.45-1.007.997-.93Z"
    />
  </svg>
);
export default SvgChart;

