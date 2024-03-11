import React, { ReactNode } from "react";
import { useArtificium } from "../../../hooks/useArtificum";
import { HeaderContainer, PageTitle, StoryCardContainer } from "./story-card.style";
import { ArtificiumIcon } from "../../../components/icons";
import { Heading } from "../../../components";

interface StoryCardProps {
  title: string;
  children: ReactNode;
}

export const StoryCard = ({ title, children }: StoryCardProps) => {
  const { theme } = useArtificium();

  return (
    <StoryCardContainer>
      <HeaderContainer backgroundGradient={theme.gradient.tertiary}>
        <Heading
          size="xl"
          fontWeight="bold"
          color={theme.color.secondary[900]}
        >
          {title}
        </Heading>
        <ArtificiumIcon
          stroke={theme.color.secondary[700]}
          strokeWidth={1}
          width={40}
          height={40}
        />
      </HeaderContainer>
      {children}
    </StoryCardContainer>
  );
};
