import React from "react";
import { AvatarContainer, ProfileContainer, StatusContainer } from "./avatar.style";
import { Status } from "../status/status";
import { StatusType } from "../../types/statusType";

export interface AvatarProps {
  avatar: string;
  size?: string;
  status?: StatusType;
  withStatus?: boolean;
}

export const Avatar = ({ avatar, size, status, withStatus }: AvatarProps) => (
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
