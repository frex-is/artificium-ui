import React, { FunctionComponent } from "react";
import { AvatarContainer, ProfileContainer, StatusContainer } from "./avatar.style";
import { Status } from "../status/status";
import { StatusType } from "../../types/statusType";

export interface AvatarProps {
  /**
   * The URL of the avatar image.
   */
  avatar: string;
  /**
   * The size of the avatar. Optional, defaults to '48px'.
   */
  size?: string;
  /**
   * The status of the user. Possible values: 'online', 'offline', 'away'.
   */
  status?: StatusType;
  /**
   * Whether to display the status of the user. Optional, defaults to false.
   */
  withStatus?: boolean;
}

/**
 * Represents an avatar / profile component.
 *
 * @component
 * @param props `AvatarProps` - The properties of the Avatar component.
 * @param props.avatar `string` - The URL of the avatar image.
 * @param props.size `Optional<string>` - The size of the avatar. Optional, defaults to '48px'.
 * @param props.status `Optional<StatusType>` - The status of the user. Possible values: 'online', 'offline', 'away'.
 * @param props.withStatus `Optional<boolean>` - Whether to display the status of the user. Optional, defaults to false.
 *
 * @returns {JSX.Element} - Returns a JSX element representing the avatar.
 */
export const Avatar: FunctionComponent<AvatarProps> = ({ avatar, size, status, withStatus }) => (
  <AvatarContainer>
    <ProfileContainer
      size={size}
      src={avatar}
      alt="avatar"
    />
    {withStatus && (
      <StatusContainer>
        <Status type={status} />
      </StatusContainer>
    )}
  </AvatarContainer>
);

Avatar.defaultProps = {
  size: "48px",
  status: "offline",
  withStatus: false,
};
