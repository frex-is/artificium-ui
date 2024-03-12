import React from "react";
import { StoryCard } from "../utils/story-card/story-card";
import { NavigationItem } from "../../components/navigation/item/navigation-item";
import { SquareIcon, TriangleIcon } from "../../components/icons";
import { useArtificium } from "../../hooks/useArtificum";
import {
  NavigationContainer,
  NavigationItemsContainer,
  NavigationTabsContainer,
  TabsContainer,
} from "./navigation.style";
import { Tab } from "../../components/navigation/tab/tab";

export default {
  title: "Navigation",
};

export const Overview = () => {
  const { theme } = useArtificium();

  return (
    <StoryCard title="Navigation">
      <NavigationContainer backgroundColor={theme.color.primary[800]}>
        <NavigationItemsContainer
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
        </NavigationItemsContainer>

        <NavigationTabsContainer
          backgroundColor={theme.color.primary[700]}
          borderColor={theme.color.primary[500]}
        >
          <TabsContainer>
            <Tab
              icon={<SquareIcon />}
              label="Overview"
            />
            <Tab
              icon={<SquareIcon stroke={theme.color.quinary[500]} />}
              label="Overview"
              isActive
            />
          </TabsContainer>
        </NavigationTabsContainer>
      </NavigationContainer>
    </StoryCard>
  );
};
