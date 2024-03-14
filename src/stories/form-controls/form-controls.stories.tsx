import React from "react";
import { useArtificium } from "../../hooks/useArtificum";
import { StoryCard } from "../utils/story-card/story-card";
import { CheckBox } from "../../components/form/controls/check-box";
import { DashedContainer } from "../utils/dashed-container/dashed-container";

export default {
  title: "Form Controls",
};

export const Overview = () => {
  const { theme } = useArtificium();

  return (
    <StoryCard title="Form Controls">
      <DashedContainer>
        <CheckBox />
      </DashedContainer>
    </StoryCard>
  );
};
