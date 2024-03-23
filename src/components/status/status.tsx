import React, { FunctionComponent } from "react";
import { useArtificium } from "../../hooks/useArtificum";
import { MoonContainer, Circle, StatusContainer, SmallCircle } from "./status.style";
import { StatusType } from "../../types/statusType";
import { MoonIcon } from "../icons/moon";

export interface StatusProps {
  /**
   * The status of the user. Possible values: 'online', 'offline', 'busy', 'away'.
   */
  type: StatusType;
}

/**
 * Represents a status component.
 *
 * @component
 * @param props `StatusProps` - The properties of the Status component.
 * @param props.type `StatusType` - The status of the user. Possible values: 'online', 'offline', 'busy', 'away'.
 *
 * @returns {JSX.Element} - Returns a JSX element representing the status.
 */
export const Status: FunctionComponent<StatusProps> = ({ type }) => {
  const { theme } = useArtificium();

  const status = {
    online: <Circle color={theme.color.valid[600]} />,
    offline: <Circle color={theme.color.primary[500]} />,
    busy: (
      <Circle color={theme.color.error[600]}>
        <SmallCircle color={theme.color.primary[700]} />
      </Circle>
    ),
    away: (
      <MoonContainer backgroundColor={theme.color.primary[800]}>
        <MoonIcon
          style={{ position: "absolute" }}
          fill={theme.color.warn[600]}
        />
      </MoonContainer>
    ),
  }[type];

  return <StatusContainer borderColor={theme.color.primary[700]}>{status}</StatusContainer>;
};
