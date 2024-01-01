import React, { FC as FunctionalComponent } from "react";

import { StyledTag, BottomLeftGlow, TopRightGlow, TagContainer } from "./tag.style";

interface TagProps {
  onClick?: () => void;
  name: string;
}

export const Tag: FunctionalComponent<TagProps> = ({ onClick, name }) => (
  <TagContainer onClick={onClick}>
    <StyledTag>{name}</StyledTag>
    <BottomLeftGlow />
    <TopRightGlow />
  </TagContainer>
);
