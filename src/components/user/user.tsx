import React from "react";
import { InformationContainer, UserContainer } from "./user.style";
import { Avatar } from "../avatar/avatar";
import { Paragraph } from "../typography";
import { useArtificium } from "../../hooks/useArtificum";

export interface UserProps {
  username: string;
  subname?: string;
  avatar: string;
}

export const User = ({ avatar, username, subname }: UserProps) => {
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
