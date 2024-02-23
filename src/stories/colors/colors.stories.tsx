import React from "react";
import { ArtificiumProvider } from "../../providers";
import { StoryCard } from "../utils/story-card/story-card";
import { Color, ColorContainer, ColorGridContainer, ColorName } from "./colors.style";
import { useArtificium } from "../../hooks/useArtificum";

export default {
  title: "Colors",
}

const ColorsCard = () => {
  const { theme } = useArtificium();

  return (
    <StoryCard title="Colors">
      { Object.entries(theme.color).map(([name, nuances]) => (
        <ColorContainer>
          <ColorName theme={theme}>{ name }</ColorName>
          <ColorGridContainer>
          {Object.entries(nuances).map(([value, color]) => (
            value != "0" && (<Color theme={theme} color={color}>{ value }</Color>)
          ))}
          </ColorGridContainer>
        </ColorContainer>
      ))
      }
    </StoryCard>
  )
}

export const Storybook = () => (
  <ArtificiumProvider>
    <ColorsCard />
  </ArtificiumProvider>
);