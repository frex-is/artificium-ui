import React, { FC as FunctionalComponent, ReactNode } from "react";
import { HeadingContainer } from "./heading.style";
import { Size } from "../../../types/size";
import { FontWeight } from "../../../types/fontWeight";
import { useHeading } from "./useHeading";

export interface HeadingProps {
  children: ReactNode;
  size?: Size;
  color?: string;
  fontWeight?: FontWeight;
}

/**
 * Represents a heading component with customizable size, font weight, and color.
 *
 * @component
 * @param props `HeadingProps` - The properties of the Heading component.
 * @param props.children `ReactNode` - The children elements to be rendered within the heading.
 * @param props.size `Optional<Size></Size>`The size of the heading. Possible value are 'xs', 's', 'm', 'l', 'xl'. Optional, defaults to 'm'
 * @param props.fontWeight `Optional<FontWeight>` - The font weight of the heading. Possible value are 'regular', 'medium', 'semi-bold', 'bold'.
 * @param props.color `Optional<string>` - The color of the heading. Optional, defaults to undefined.
 *
 * @returns {JSX.Element} - Return a JSX element  representing the heading.
 */
export const Heading: FunctionalComponent<HeadingProps> = ({
  children,
  size = "m",
  color = undefined,
  fontWeight = "regular",
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
