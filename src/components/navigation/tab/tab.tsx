import React, { FunctionComponent, ReactNode } from "react";
import { useArtificium } from "../../../hooks/useArtificum";
import { Indicator, TabContainer } from "./tab.style";
import { Paragraph } from "../../typography";

export interface TabProps {
  /**
   * The label of the tab.
   */
  label: string;
  /**
   * The icon to be displayed within the tab.
   */
  icon: ReactNode;
  /**
   * Whether the tab is active. Optional, defaults to false.
   */
  isActive?: boolean;
  /**
   * The function to be called when the tab is clicked. Optional, defaults to an empty function.
   */
  onClick?: () => void;
}

/**
 * Represents a tab component with customizable label, icon, and click behavior.
 *
 * @component
 * @param props `TabProps` - The properties of the Tab component.
 * @param props.label `string` - The label of the tab.
 * @param props.icon `ReactNode` - The icon to be displayed within the tab.
 * @param props.isActive `Optional<boolean>` - Whether the tab is active. Optional, defaults to false.
 * @param props.onClick `Optional<() => void>` - The function to be called when the tab is clicked. Optional, defaults to an empty function.
 *
 * @returns {JSX.Element} - Returns a JSX element representing the tab.
 */
export const Tab: FunctionComponent<TabProps> = ({ label, icon, isActive, onClick }) => {
  const { theme } = useArtificium();

  return (
    <TabContainer onClick={() => onClick()}>
      {icon}
      <Paragraph
        size="m"
        fontWeight="semiBold"
      >
        {label}
      </Paragraph>
      {isActive && <Indicator color={theme.color.quinary[500]} />}
    </TabContainer>
  );
};

Tab.defaultProps = {
  isActive: false,
  onClick: () => {},
};
