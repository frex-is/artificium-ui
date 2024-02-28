import React, { FC as FunctionalComponent, ReactNode } from "react";
import { ParagraphContainer } from "./paragraph.style";
import { Size } from "../../../types/size";
import { FontWeight } from "../../../types/fontWeight";
import { useParagph } from "./useParagraph";

export interface TextProps {
  children: ReactNode;
  size: Size;
  fontWeight?: FontWeight;
  color?: string;
}

export const Paragraph: FunctionalComponent<TextProps> = ({
  size,
  children,
  fontWeight = "regular",
  color = undefined,
}) => {
  const { fontFamily, fontSize, lineHeight, letterSpacing, textColor } = useParagph({
    size,
    fontWeight,
    color,
  });

  return (
    <ParagraphContainer
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      fontFamily={fontFamily}
      textColor={textColor}
      fontSize={fontSize}
    >
      {children}
    </ParagraphContainer>
  );
};
