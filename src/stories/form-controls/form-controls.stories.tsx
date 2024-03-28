import React from "react";
import { useArtificium } from "../../hooks/useArtificum";
import { StoryCard } from "../utils/story-card/story-card";
import { CheckBox } from "../../components/form/controls/check-box/check-box";
import { DashedContainer } from "../utils/dashed-container/dashed-container";
import { Radio } from "../../components/form/controls/radio/radio";
import { Toggle } from "../../components/form/controls/toggle/toggle";

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

      <DashedContainer>
        <Radio />
      </DashedContainer>

      <DashedContainer>
        <Toggle />
      </DashedContainer>
    </StoryCard>
  );
};
