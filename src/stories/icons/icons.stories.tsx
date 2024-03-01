import React from "react";

import * as icons from "../../components/icons";
import { IconContainer, Row } from "./icons.style";
import { useChunk } from "../../hooks/useChunk";
import { useArtificium } from "../../hooks/useArtificum";
import { StoryCard } from "../utils/story-card/story-card";

export default {
  title: "Icons",
};

// TODO : add option to stroke for all icon HF moi du futur :)

export const Overview = () => {
  const { theme } = useArtificium();
  const { listOfChunks } = useChunk(Object.values(icons), 14);

  return (
    <StoryCard title="Icons">
      <IconContainer backgroundColor={theme.color.primary[800]}>
        {listOfChunks.map((iconChunk, i) => (
          <Row key={i}>{iconChunk.map((icon, ii) => icon({ key: ii }))}</Row>
        ))}
      </IconContainer>
    </StoryCard>
  );
};
