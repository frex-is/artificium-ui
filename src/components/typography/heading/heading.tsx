import React, { ReactNode } from "react";
import { useArtificium } from "../../../hooks/useArtificum";
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

export const Heading = ({ size, children, fontWeight = "regular", color }: HeadingProps) => {
  const { fontFamily, fontSize, lineHeight, letterSpacing, textColor } = useHeading({
    size,
    fontWeight,
    color,
  });

  return (
    <HeadingContainer
      theme={{
        fontFamily,
        fontSize,
        lineHeight,
        letterSpacing,
        textColor,
      }}
    >
      {children}
    </HeadingContainer>
  );
};
