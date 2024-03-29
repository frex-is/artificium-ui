import * as React from "react";
import { SVGProps } from "react";

export const CogIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
    />
    <path
      stroke="#686B6E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.901 6.747a1.958 1.958 0 0 0-2.674.717l-.042.072c-.54.937-.22 2.135.717 2.675l.243.14C5.717 10.682 6 11.34 6 12s-.283 1.318-.855 1.649l-.243.14a1.959 1.959 0 0 0-.717 2.675l.042.073a1.958 1.958 0 0 0 2.674.716l.244-.14c.573-.331 1.278-.25 1.85.082.572.331 1.005.905 1.005 1.566v.282c0 1.08.876 1.957 1.957 1.957h.086A1.957 1.957 0 0 0 14 19.043v-.282c0-.66.433-1.235 1.005-1.566.572-.332 1.277-.413 1.85-.083l.244.141c.936.54 2.134.22 2.674-.716l.042-.073c.54-.937.22-2.134-.717-2.675l-.243-.14C18.283 13.318 18 12.66 18 12s.283-1.318.855-1.649l.243-.14a1.959 1.959 0 0 0 .717-2.675l-.042-.072a1.958 1.958 0 0 0-2.674-.717l-.244.14c-.573.331-1.278.25-1.85-.082C14.433 6.474 14 5.9 14 5.24v-.282A1.957 1.957 0 0 0 12.043 3h-.086A1.957 1.957 0 0 0 10 4.957v.282c0 .66-.433 1.235-1.005 1.566-.572.332-1.277.413-1.85.083l-.244-.141Z"
    />
  </svg>
);
