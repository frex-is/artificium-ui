import React, { ReactNode } from "react";
import { useArtificium } from "../../../hooks/useArtificum";
import { Dashed } from "./dashed-container.style";

export interface DashedContainerProps {
  children: ReactNode;
}

export const DashedContainer = ({ children }: DashedContainerProps) => {
  const { theme } = useArtificium();

  return (
    <Dashed
      backgroundColor={theme.color.primary[700]}
      borderColor={theme.color.primary[500]}
    >
      {children}
    </Dashed>
  );
};
