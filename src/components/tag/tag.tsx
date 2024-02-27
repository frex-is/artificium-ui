import React, { FC as FunctionalComponent, ReactNode } from "react";

import { StyledTag, BottomLeftGlow, TopRightGlow, TagContainer } from "./tag.style";
import { Variant } from "../../types/variant";
import { useTags } from "./useTags";

interface TagProps {
  name: string;
  variant?: Variant;
  customColor?: string;
  icon?: ReactNode;
  iconPosition?: "before" | "after";
  noGlow?: boolean;
  onClick?: () => void;
}

export const Tag: FunctionalComponent<TagProps> = ({
  variant = "primary",
  customColor,
  icon,
  iconPosition = "before",
  onClick,
  name,
  noGlow,
}) => {
  const { color } = useTags({ variant, customColor });

  return (
    <TagContainer onClick={onClick}>
      {iconPosition === "before" && icon}
      <StyledTag color={color}>{name}</StyledTag>
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
