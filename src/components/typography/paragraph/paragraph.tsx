import React, { FunctionComponent, ReactNode } from "react";
import { ParagraphContainer } from "./paragraph.style";
import { Size } from "../../../types/size";
import { FontWeight } from "../../../types/fontWeight";
import { useParagraph } from "./useParagraph";

export interface ParagraphProps {
  children: ReactNode;
  size: Size;
  fontWeight?: FontWeight;
  color?: string;
  isSpan?: boolean;
}

export const Paragraph: FunctionComponent<ParagraphProps> = ({
  size,
  children,
  fontWeight = "regular",
  color = undefined,
  isSpan = false,
}) => {
  const { fontFamily, fontSize, lineHeight, letterSpacing, textColor } = useParagraph({
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
      isSpan={isSpan}
    >
      {children}
    </ParagraphContainer>
  );
};
