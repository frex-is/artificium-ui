import React, { FunctionComponent } from "react";
import { InformationContainer, UserContainer } from "./user.style";
import { Avatar } from "../avatar/avatar";
import { Paragraph } from "../typography";
import { useArtificium } from "../../hooks/useArtificum";

export interface UserProps {
  /**
   * The URL of the user's avatar.
   */
  username: string;
  /**
   * The subname of the user is an extra information to display under the username. Optional, defaults to an empty string.
   */
  subname?: string;
  /**
   * The username of the user.
   */
  avatar: string;
}

/**
 * Represents a user component.
 *
 * @component
 * @param props `UserProps` - The properties of the User component.
 * @param props.avatar `string` - The URL of the user's avatar.
 * @param props.username `string` - The username of the user.
 * @param props.subname `Optional<string>` - The subname of the user is an extra information to display under the username. Optional, defaults to an empty string.
 *
 * @returns {JSX.Element} - Returns a JSX element representing the user.
 */
export const User: FunctionComponent<UserProps> = ({ avatar, username, subname }) => {
  const { theme } = useArtificium();

  return (
    <UserContainer>
      <Avatar
        size="64px"
        avatar={avatar}
      />
      <InformationContainer>
        <Paragraph
          size="l"
          fontWeight="semiBold"
        >
          {username}
        </Paragraph>
        <Paragraph
          size="s"
          fontWeight="medium"
          color={theme.color.quinary[500]}
        >
          {subname}
        </Paragraph>
      </InformationContainer>
    </UserContainer>
  );
};

User.defaultProps = {
  subname: "",
};
