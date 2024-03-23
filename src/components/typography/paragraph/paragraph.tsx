import React, { FunctionComponent, ReactNode } from "react";
import { ParagraphContainer } from "./paragraph.style";
import { Size } from "../../../types/size";
import { FontWeight } from "../../../types/fontWeight";
import { useParagraph } from "./useParagraph";

export interface ParagraphProps {
  /**
   * The children elements to be rendered within the paragraph.
   */
  children: ReactNode;
  /**
   * The size of the paragraph. Possible value are 'xs', 's', 'm', 'l', 'xl'. Optional, defaults to 'm'
   */
  size?: Size;
  /**
   * The font weight of the paragraph. Possible value are 'regular', 'medium', 'semi-bold', 'bold'.
   */
  fontWeight?: FontWeight;
  /**
   * The color of the paragraph. Optional, defaults to undefined.
   */
  color?: string;
  /**
   * Whether the paragraph should be rendered as a span element. Optional, defaults to false.
   */
  isSpan?: boolean;
}

/**
 * Represents a paragraph component with customizable size, font weight, and color.
 *
 * @component
 * @param props - The properties of the Paragraph component.
 * @param props.children - The children elements to be rendered within the paragraph.
 * @param props.size - The size of the paragraph. Possible value are 'xs', 's', 'm', 'l', 'xl'. Optional, defaults to 'm'
 * @param props.fontWeight - The font weight of the paragraph. Possible value are 'regular', 'medium', 'semi-bold', 'bold'.
 * @param props.color - The color of the paragraph. Optional, defaults to undefined.
 * @param props.isSpan - Whether the paragraph should be rendered as a span element. Optional, defaults to false.
 *
 * @returns {JSX.Element} - Return a JSX element representing the paragraph.
 */
export const Paragraph: FunctionComponent<ParagraphProps> = ({
  size,
  children,
  fontWeight,
  color,
  isSpan,
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

Paragraph.defaultProps = {
  fontWeight: "regular",
  color: undefined,
  isSpan: false,
  size: "m",
};
