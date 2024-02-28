import React, { FC as FunctionalComponent, ReactNode } from "react";
import { HeadingContainer } from "./heading.style";
import { Size } from "../../../types/size";
import { FontWeight } from "../../../types/fontWeight";
import { useHeading } from "./useHeading";

export interface HeadingProps {
  size: Size;
  children: ReactNode;
  fontWeight?: FontWeight;
  color?: string;
}

export const Heading: FunctionalComponent<HeadingProps> = ({
  size,
  children,
  fontWeight = "regular",
  color = undefined,
}) => {
  const { fontFamily, fontSize, lineHeight, letterSpacing, textColor } = useHeading({
    size,
    fontWeight,
    color,
  });

  return (
    <HeadingContainer
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      fontFamily={fontFamily}
      textColor={textColor}
      fontSize={fontSize}
    >
      {children}
    </HeadingContainer>
  );
};
