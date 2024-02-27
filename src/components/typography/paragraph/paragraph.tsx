import React, { ReactNode } from "react";
import { ParagraphContainer } from "./paragraph.style";
import { useArtificium } from "../../../hooks/useArtificum";
import { Size } from "../../../types/size";
import { FontWeight } from "../../../types/fontWeight";
import { useParagph } from "./useParagraph";

export interface TextProps {
  children: ReactNode;
  size: Size;
  fontWeight?: FontWeight;
  color?: string;
}

export const Paragraph = ({ size, children, fontWeight = "regular", color }: TextProps) => {
  const { fontFamily, fontSize, lineHeight, letterSpacing, textColor } = useParagph({
    size,
    fontWeight,
    color,
  });

  return (
    <ParagraphContainer
      theme={{
        fontFamily,
        fontSize,
        lineHeight,
        letterSpacing,
        textColor,
      }}
    >
      {children}
    </ParagraphContainer>
  );
};
