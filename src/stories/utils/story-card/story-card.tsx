import React, { ReactNode } from "react";
import { useArtificium } from "../../../hooks/useArtificum";
import { HeaderContainer, PageTitle, StoryCardContainer } from "./story-card.style";
import { ArtificiumIcon } from "../../../components/icons";

interface StoryCardProps {
  title: string;
  children: ReactNode;
}

export const StoryCard = ({ title, children }: StoryCardProps) => {
  const { theme } = useArtificium();

  return (
    <StoryCardContainer>
      <HeaderContainer theme={theme}>
        <PageTitle>{title}</PageTitle>
        <ArtificiumIcon
          stroke={theme.color.secondary[700]}
          strokeWidth={1}
          width={80}
          height={80}
        />
      </HeaderContainer>
      {children}
    </StoryCardContainer>
  );
};
