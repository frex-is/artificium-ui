import React, { FunctionComponent, ReactNode } from "react";

import { StyledTag, BottomLeftGlow, TopRightGlow, TagContainer } from "./tag.style";
import { Variant } from "../../types/variant";
import { useTags } from "./useTags";

interface TagProps {
  name: string | ReactNode;
  variant?: Variant;
  customColor?: string;
  noGlow?: boolean;
  icon?: ReactNode;
  iconPosition?: "before" | "after";
  onClick?: () => void;
}

/**
 * Represents a tag component with customizable name, variant, color, icon, and click behavior.
 *
 * @component
 * @param props - The properties of the Tag component.
 * @param props.name - The name or content of the tag.
 * @param props.variant - The variant of the tag. Possible values: 'primary', 'secondary', 'tertiary'.
 * @param props.customColor - The custom color of the tag.
 * @param props.noGlow - Whether to disable the glow effect of the tag.
 * @param props.icon - The icon to be displayed within the tag.
 * @param props.iconPosition - The position of the icon relative to the name. Possible values: 'before', 'after'.
 * @param props.onClick - The function to be called when the tag is clicked.
 *
 * @returns {JSX.Element} - Returns a JSX element representing the tag.
 */
export const Tag: FunctionComponent<TagProps> = ({
  name,
  variant,
  customColor,
  noGlow,
  iconPosition,
  icon,
  onClick,
}) => {
  const { fontFamily, color } = useTags({ variant, customColor });

  return (
    <TagContainer onClick={onClick}>
      {iconPosition === "before" && icon}
      <StyledTag
        fontFamily={fontFamily}
        color={color}
      >
        {name}
      </StyledTag>
      {!noGlow && (
        <>
          <BottomLeftGlow color={color} />
          <TopRightGlow color={color} />
        </>
      )}
      {iconPosition === "after" && icon}
    </TagContainer>
  );
};

Tag.defaultProps = {
  variant: "primary",
  customColor: undefined,
  noGlow: false,
  icon: undefined,
  iconPosition: "before",
  onClick: undefined,
};
