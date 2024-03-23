import React, { ReactNode } from "react";
import { useArtificium } from "../../../hooks/useArtificum";
import { NavigationInformationContainer, NavigationItemContainer } from "./navigation-item.style";
import { Paragraph } from "../../typography";
import { Tag } from "../../tag/tag";

export interface NavigationItemProps {
  label: string;
  icon: ReactNode;
  isActive?: boolean;
  shortcut?: string;
  onClick?: () => void;
}

export const NavigationItem = ({
  label,
  icon,
  shortcut,
  isActive,
  onClick,
}: NavigationItemProps) => {
  const { theme } = useArtificium();

  return (
    <NavigationItemContainer
      isActive={isActive}
      onClick={() => onClick()}
    >
      <NavigationInformationContainer>
        {icon}
        <Paragraph
          size="m"
          fontWeight="semiBold"
          color={theme.color.primary[100]}
        >
          {label}
        </Paragraph>
      </NavigationInformationContainer>
      {shortcut && <Tag name={shortcut} />}
    </NavigationItemContainer>
  );
};

NavigationItem.defaultProps = {
  isActive: false,
  shortcut: undefined,
  onClick: () => {},
};
