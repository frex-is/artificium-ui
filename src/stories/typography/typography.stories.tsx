import React from "react";
import { ArtificiumProvider } from "../../providers";
import { StoryCard } from "../utils/story-card/story-card";
import {
  FontNameContainer,
  HeadingContainer,
  IconTypography,
  Information,
  InformationSection,
  ParagraphContainer,
  Section,
  SectionTitle,
  SubHeader,
  TypographyContainer,
} from "./typography.style";
import { useArtificium } from "../../hooks/useArtificum";
import { Heading } from "../../components/typography/heading/heading";
import { FontWeight } from "../../types/fontWeight";
import { Paragraph } from "../../components/typography/paragraph/paragraph";

export default {
  title: "Typography",
};

const TypographyCard = () => {
  const { theme } = useArtificium();
  const fontWeights: FontWeight[] = ["regular", "medium", "semi-bold", "bold"];

  return (
    <StoryCard title="Typography">
      <SubHeader theme={theme}>
        <FontNameContainer theme={theme}>hello</FontNameContainer>
        <IconTypography theme={theme}>Aa</IconTypography>
      </SubHeader>
      <TypographyContainer>
        <HeadingContainer>
          <Section theme={theme}>
            <SectionTitle>
              {fontWeights.map(fontWeight => (
                <Heading
                  size="xl"
                  fontWeight={fontWeight}
                >
                  Heading XL
                </Heading>
              ))}
            </SectionTitle>
            <InformationSection>
              <Information>
                <Paragraph
                  size="m"
                  color={theme.color.primary[400]}
                >
                  Size
                </Paragraph>
                <Paragraph
                  size="l"
                  color={theme.color.primary[300]}
                >
                  36px
                </Paragraph>
              </Information>
              <Information>
                <Paragraph
                  size="m"
                  color={theme.color.primary[400]}
                >
                  Line Height
                </Paragraph>
                <Paragraph
                  size="l"
                  color={theme.color.primary[300]}
                >
                  44px
                </Paragraph>
              </Information>
              <Information>
                <Paragraph
                  size="m"
                  color={theme.color.primary[400]}
                >
                  Letter spacing
                </Paragraph>
                <Paragraph
                  size="l"
                  color={theme.color.primary[300]}
                >
                  0px
                </Paragraph>
              </Information>
            </InformationSection>
          </Section>
        </HeadingContainer>
        <ParagraphContainer></ParagraphContainer>
      </TypographyContainer>
    </StoryCard>
  );
};

export const Overview = () => (
  <ArtificiumProvider>
    <TypographyCard />
  </ArtificiumProvider>
);
