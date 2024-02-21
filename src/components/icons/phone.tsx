import * as React from "react";
import { SVGProps } from "react";

export const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="m13.916 20.268-2.067-1.405a25.4 25.4 0 0 1-6.712-6.712l-1.405-2.067a4.227 4.227 0 0 1 .9-5.714l.903-.702a3.17 3.17 0 0 1 4.585.744l.439.659c.407.61.455 1.392.127 2.048a4.09 4.09 0 0 0 .083 3.813l.165.296a4.73 4.73 0 0 0 1.838 1.838l.297.165a4.09 4.09 0 0 0 3.812.083 2.04 2.04 0 0 1 2.048.127l.659.44a3.17 3.17 0 0 1 .744 4.584l-.702.903a4.227 4.227 0 0 1-5.714.9Z"
    />
  </svg>
);
