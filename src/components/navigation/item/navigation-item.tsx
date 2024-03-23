import React, { ReactNode } from "react";
import { useArtificium } from "../../../hooks/useArtificum";
import { NavigationInformationContainer, NavigationItemContainer } from "./navigation-item.style";
import { Paragraph } from "../../typography";
import { Tag } from "../../tag/tag";

export interface NavigationItemProps {
  /**
   * The label of the navigation item.
   */
  label: string;
  /**
   * The icon of the navigation item.
   */
  icon: ReactNode;
  /**
   * Whether the navigation item is active. Optional, defaults to false.
   */
  isActive?: boolean;
  /**
   * The shortcut of the navigation item. Optional.
   */
  shortcut?: string;
  /**
   * The function to be called when the navigation item is clicked.
   */
  onClick?: () => void;
}

/**
 * Represents a navigation item component with customizable label, icon, shortcut, and click behavior.
 *
 * @component
 * @param props - The properties of the NavigationItem component.
 * @param props.label - The label of the navigation item.
 * @param props.icon - The icon of the navigation item.
 * @param props.isActive - Whether the navigation item is active. Optional, defaults to false.
 * @param props.shortcut - The shortcut of the navigation item. Optional.
 * @param props.onClick - The function to be called when the navigation item is clicked.
 *
 * @returns {JSX.Element} - Returns a JSX element representing the navigation item.
 */
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
