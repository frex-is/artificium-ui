import React from "react";
import { StoryCard } from "../utils/story-card/story-card";
import { Gradient, GradientsContainer } from "./gradient.style";
import { useArtificium } from "../../hooks/useArtificum";
import { Paragraph } from "../../components";

export default {
  title: "gradient",
};

export const Overview = () => {
  const { theme } = useArtificium();
  const gradientDirection = ["to top right", "to bottom left"];

  return (
    <StoryCard title="Gradient">
      <GradientsContainer backgroundColor={theme.color.primary[800]}>
        {Object.entries(theme.gradient).map(([name, gradient]: [string, string]) =>
          gradientDirection.map(direction => (
            <Gradient
              color={theme.color.primary[700]}
              gradientDirection={direction}
              gradient={gradient}
            >
              <Paragraph
                color={theme.color.primary[700]}
                size="l"
                fontWeight="semiBold"
              >
                {name} - {direction}
              </Paragraph>
            </Gradient>
          )),
        )}
      </GradientsContainer>
    </StoryCard>
  );
};
