import * as React from "react";
import { SVGProps } from "react";

export const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.427 16.456a3 3 0 1 0 5.146 3.088 3 3 0 0 0-5.146-3.088Zm0 0-4.854-2.912m0 0c.271-.451.427-.98.427-1.544 0-.565-.156-1.093-.427-1.544m0 3.088a3 3 0 1 1 0-3.087m0 0 4.854-2.913m0 0a3 3 0 1 0 5.146-3.087 3 3 0 0 0-5.146 3.087Z"
    />
  </svg>
);
