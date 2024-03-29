import React from "react";

import { Tag } from "../../components";
import { StoryCard } from "../utils/story-card/story-card";
import { BadgeList, BadgesContainer, TagWithIconContainer } from "./tag.style";
import { useArtificium } from "../../hooks/useArtificum";
import { CopyIcon, CrossIcon } from "../../components/icons";

export default {
  title: "Tag",
  component: Tag,
};

export const Overview = () => {
  const { theme } = useArtificium();

  return (
    <StoryCard title="Tags">
      <BadgesContainer backgroundColor={theme.color.primary[800]}>
        <BadgeList
          backgroundColor={theme.color.primary[700]}
          borderColor={theme.color.primary[500]}
        >
          <Tag
            variant="secondary"
            name="Badge"
          />
          <Tag
            variant="quinary"
            name="Badge"
          />
          <Tag
            variant="senary"
            name="Badge"
          />
          <Tag
            variant="warn"
            name="Badge"
          />
          <Tag
            variant="valid"
            name="Badge"
          />
          <Tag
            variant="error"
            name="Badge"
          />
          <Tag
            variant="tertiary"
            name="Badge"
          />
          <Tag
            variant="quaternary"
            name="Badge"
          />
        </BadgeList>
        <TagWithIconContainer>
          <Tag
            name="Label"
            icon={<CopyIcon />}
            iconPosition="after"
            noGlow
          />
          <Tag
            name="chips"
            icon={
              <CrossIcon
                width={16}
                height={16}
                fill="red"
              />
            }
            iconPosition="after"
            noGlow
          />
        </TagWithIconContainer>
      </BadgesContainer>
    </StoryCard>
  );
};
