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
      { Object.entries(theme.color).map(([name, shades]) => (
        <ColorContainer 
          key={name} 
          theme={theme}
        >
          <ColorName theme={theme}>{ name }</ColorName>
          <ColorGridContainer>
          {Object.entries(shades).map(([shade, color]) => {
            const shadeNumber = Number(shade);
            const isRendered = shadeNumber > 0;
            const textColor = shadeNumber > 400 ? shades[100] : shades[900];
            
            return isRendered && (
              <Color
                key={color} 
                theme={{
                  ...theme,
                  textColor
                }}
                color={color}
              >
                { shadeNumber }
              </Color>
            )
          })}
          </ColorGridContainer>
        </ColorContainer>
      ))
      }
    </StoryCard>
  )
}

export const Overview = () => (
  <ArtificiumProvider>
    <ColorsCard />
  </ArtificiumProvider>
);