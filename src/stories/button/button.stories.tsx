import React from "react";
import { useArtificium } from "../../hooks/useArtificum";
import { StoryCard } from "../utils/story-card/story-card";
import { IconButton } from "../../components/button/icon/icon-button";
import { AlertCircleIcon } from "../../components/icons";
import { Column, IconContainer } from "./button.style";
import { DashedContainer } from "../utils/dashed-container/dashed-container";

export default {
  title: "Button",
};

const IconsButton = () => 

export const Overview = () => {
  const { theme } = useArtificium();
  const sizes = ["s", "m", "l"];
  const types = ["flat", "outlined", "ghost", "glass"];

  return (
    <StoryCard title="Buttons">
      <IconContainer>
        <DashedContainer>
          <Column>
            <IconButton
              variant="quinary"
              type="flat"
              icon={<AlertCircleIcon stroke={theme.color.secondary[900]} />}
              size="l"
            />
            <IconButton
              variant="quinary"
              type="flat"
              icon={<AlertCircleIcon stroke={theme.color.secondary[900]} />}
              size="l"
              forceState="hover"
            />
            <IconButton
              variant="quinary"
              type="flat"
              icon={<AlertCircleIcon stroke={theme.color.secondary[900]} />}
              size="l"
              forceState="active"
            />
          </Column>
          <Column>
            <IconButton
              variant="quinary"
              type="outlined"
              icon={<AlertCircleIcon stroke={theme.color.secondary[900]} />}
              size="l"
            />
            <IconButton
              variant="quinary"
              type="outlined"
              icon={<AlertCircleIcon stroke={theme.color.secondary[900]} />}
              size="l"
              forceState="hover"
            />
            <IconButton
              variant="quinary"
              type="outlined"
              icon={<AlertCircleIcon stroke={theme.color.secondary[900]} />}
              size="l"
              forceState="active"
            />
          </Column>
          <Column>
            <IconButton
              variant="primary"
              type="flat"
              icon={<AlertCircleIcon stroke={theme.color.primary[200]} />}
              size="l"
            />
            <IconButton
              variant="primary"
              type="flat"
              icon={<AlertCircleIcon stroke={theme.color.primary[200]} />}
              size="l"
              forceState="hover"
            />
            <IconButton
              variant="primary"
              type="flat"
              icon={<AlertCircleIcon stroke={theme.color.primary[200]} />}
              size="l"
              forceState="active"
            />
          </Column>
          <Column>
            <IconButton
              variant="primary"
              type="ghost"
              icon={<AlertCircleIcon stroke={theme.color.primary[200]} />}
              size="l"
            />
            <IconButton
              variant="primary"
              type="ghost"
              icon={<AlertCircleIcon stroke={theme.color.primary[200]} />}
              size="l"
              forceState="hover"
            />
            <IconButton
              variant="primary"
              type="ghost"
              icon={<AlertCircleIcon stroke={theme.color.primary[200]} />}
              size="l"
              forceState="active"
            />
          </Column>
        </DashedContainer>
      </IconContainer>
    </StoryCard>
  );
};
