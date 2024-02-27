import React, { ReactNode } from "react";
import { ParagraphContainer } from "./paragraph.style";
import { useArtificium } from "../../../hooks/useArtificum";
import { Size } from "../../../types/size";

export interface TextProps {
  children: ReactNode;
  size: Size;
}

export const Paragraph = ({ children }: TextProps) => {
  const { theme } = useArtificium();

  return <ParagraphContainer theme={theme}>{children}</ParagraphContainer>;
};
