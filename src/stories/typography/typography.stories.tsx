import React from "react";
import { ArtificiumProvider } from "../../providers";
import { StoryCard } from "../utils/story-card/story-card";
import { FontNameContainer, IconTypography, SubHeader } from "./typography.style";
import { useArtificium } from "../../hooks/useArtificum";

export default {
  title: "Typography",
};

const TypographyCard = () => {
  const { theme } = useArtificium();

  return (
    <StoryCard title="Typography">
      <SubHeader theme={theme}>
        <FontNameContainer theme={theme}>hello</FontNameContainer>
        <IconTypography theme={theme}>Aa</IconTypography>
      </SubHeader>
    </StoryCard>
  );
};

export const Overview = () => (
  <ArtificiumProvider>
    <TypographyCard />
  </ArtificiumProvider>
);
