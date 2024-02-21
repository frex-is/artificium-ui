import * as React from "react";
import { SVGProps } from "react";

export const Pin02Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
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
      d="M17.766 10.282c.153-.56.234-1.117.234-1.668C18 5.514 15.314 3 12 3S6 5.514 6 8.614c0 1.054.297 2.13.824 3.201m10.942-1.533c-.606 2.218-2.088 4.14-4.105 6.068-.907.867-2.415.867-3.322 0-1.516-1.45-2.755-2.987-3.515-4.535m10.942-1.533 1.668.37A2 2 0 0 1 21 12.604v5.055a2 2 0 0 1-2.434 1.952l-.764-.17a6 6 0 0 0-2.604 0l-6.396 1.422a6 6 0 0 1-2.604 0L4.566 20.5A2 2 0 0 1 3 18.548v-5.243A1.85 1.85 0 0 1 5.25 11.5l.948.21q.31.07.626.105M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
