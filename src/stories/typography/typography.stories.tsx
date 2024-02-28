import React from "react";
import { ArtificiumProvider } from "../../providers";
import { StoryCard } from "../utils/story-card/story-card";
import {
  FontNameContainer,
  HeadingContainer,
  IconTypography,
  InformationContainer,
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

const Information = ({ title, value }: { title: string; value: string }) => {
  const { theme } = useArtificium();

  return (
    <InformationContainer>
      <Paragraph
        size="m"
        color={theme.color.primary[400]}
      >
        {title}
      </Paragraph>
      <Paragraph
        size="l"
        color={theme.color.primary[300]}
      >
        {value}
      </Paragraph>
    </InformationContainer>
  );
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
              <Information
                title="Size"
                value="36px"
              />
              <Information
                title="Line Height"
                value="44px"
              />
              <Information
                title="Letter Spacing"
                value="0px"
              />
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
