import * as React from "react";
import { SVGProps } from "react";

export const GlobeIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 21A9 9 0 0 1 5.292 6M12 21a8.948 8.948 0 0 0 3-.512M12 21l.269-1.614a3.284 3.284 0 0 0-.612-2.51l-.045-.06A3.06 3.06 0 0 1 11 14.98v-.339a2 2 0 0 1 .373-1.163l.893-1.25a1.16 1.16 0 0 1 2.023.243c.133.334.413.587.758.685l.425.122a2.061 2.061 0 0 1 1.224 3.005l-.553.966a2.928 2.928 0 0 0-.235.525L15 20.488M5.292 6A8.978 8.978 0 0 1 12 3c1.136 0 2.222.21 3.223.594M5.292 6l.456.401a3.143 3.143 0 0 1 1.045 2.752l-.19 1.526a1.1 1.1 0 0 0 2.092.591l.546-1.2c.17-.374.431-.7.76-.946l1.015-.76A1.816 1.816 0 0 1 12.106 8h.967a1.299 1.299 0 0 0 1.081-2.019 1.299 1.299 0 0 1 .26-1.726l.809-.66M15 20.487a9.004 9.004 0 0 0 .223-16.894"
    />
  </svg>
);
