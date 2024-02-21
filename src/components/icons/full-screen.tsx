import * as React from "react";
import { SVGProps } from "react";

export const FullScreenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.535 3.464.472 5.186m-.472-5.186-5.185-.471m5.185.471L14 10M3.936 20.064l-.472-5.185m.472 5.185 5.185.471m-5.185-.47L10 14"
    />
  </svg>
);
