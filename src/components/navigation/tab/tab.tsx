import React, { ReactNode } from "react";
import { useArtificium } from "../../../hooks/useArtificum";
import { Indicator, TabContainer } from "./tab.style";
import { Paragraph } from "../../typography";

export interface TabProps {
  label: string;
  icon: ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

export const Tab = ({ label, icon, isActive, onClick }: TabProps) => {
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
