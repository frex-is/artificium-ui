import React from "react";
import { ArtificiumProvider } from "../../providers";
import { StoryCard } from "../utils/story-card/story-card";
import { Gradient, GradientsContainer } from "./gradient.style";
import { useArtificium } from "../../hooks/useArtificum";

export default {
  title: "gradient",
};

const GradientCard = () => {
  const { theme } = useArtificium();
  const gradientDirection = ["to top right", "to bottom left"]

  return (
    <StoryCard title="Gradient">
      <GradientsContainer theme={theme}>
        { Object.entries(theme.gradient).map(([name, gradient]) => gradientDirection.map((direction) => (
          <Gradient 
            theme={{ direction, gradient }}
            color={theme.color.primary[700]}
          >
            { name } - { direction }
          </Gradient>
        )))}
      </GradientsContainer>
    </StoryCard>
  );
};

export const Overview = () => (
  <ArtificiumProvider>
    <GradientCard />
  </ArtificiumProvider>
);
