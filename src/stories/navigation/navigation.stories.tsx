import React from "react";
import { StoryCard } from "../utils/story-card/story-card";
import { NavigationItem } from "../../components/navigation/item/navigation-item";
import { TriangleIcon } from "../../components/icons";
import { useArtificium } from "../../hooks/useArtificum";
import { NavigationContainer, NavigationItemContainer } from "./navigation.style";

export default {
  title: "Navigation",
};

export const Overview = () => {
  const { theme } = useArtificium();

  return (
    <StoryCard title="Navigation">
      <NavigationContainer backgroundColor={theme.color.primary[800]}>
        <NavigationItemContainer
          backgroundColor={theme.color.primary[700]}
          borderColor={theme.color.primary[500]}
        >
          <NavigationItem
            label="Label"
            icon={<TriangleIcon stroke={theme.color.quinary[500]} />}
            shortcut="⌘ S"
          />
          <NavigationItem
            label="Label"
            icon={<TriangleIcon stroke={theme.color.quinary[500]} />}
            shortcut="⌘ S"
            isActive
          />
        </NavigationItemContainer>
      </NavigationContainer>
    </StoryCard>
  );
};
