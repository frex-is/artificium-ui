import React from "react";
import { StoryCard } from "../utils/story-card/story-card";
import {
  Circle,
  FontNameContainer,
  FontTypeContainer,
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

export const Overview = () => {
  const { theme } = useArtificium();
  const fontWeights: FontWeight[] = ["regular", "medium", "semi-bold", "bold"];
  const sections: any[] = [
    {
      size: "xl",
      information: {
        size: "36px",
        lineHeight: "44px",
        letterSpacing: "0",
      },
    },
    {
      size: "l",
      information: {
        size: "32px",
        lineHeight: "40px",
        letterSpacing: "0",
      },
    },
    {
      size: "m",
      information: {
        size: "28px",
        lineHeight: "36px",
        letterSpacing: "0",
      },
    },
    {
      size: "s",
      information: {
        size: "24px",
        lineHeight: "32px",
        letterSpacing: "0",
      },
    },
    {
      size: "xs",
      information: {
        size: "20px",
        lineHeight: "28px",
        letterSpacing: "0",
      },
    },
  ];

  return (
    <StoryCard title="Typography">
      <SubHeader theme={theme}>
        <FontNameContainer theme={theme}>
          <Heading
            size="xl"
            fontWeight="semi-bold"
          >
            Plus Jakarta Sans
          </Heading>
          <FontTypeContainer>
            <Heading
              size="xs"
              fontWeight="bold"
            >
              Bold
            </Heading>
            <Circle color={theme.color.primary[400]} />
            <Heading
              size="xs"
              fontWeight="semi-bold"
            >
              SemiBold
            </Heading>
            <Circle color={theme.color.primary[400]} />
            <Heading
              size="xs"
              fontWeight="medium"
            >
              Medium
            </Heading>
            <Circle color={theme.color.primary[400]} />
            <Heading
              size="xs"
              fontWeight="regular"
            >
              Regular
            </Heading>
          </FontTypeContainer>
        </FontNameContainer>
        <IconTypography theme={theme}>Aa</IconTypography>
      </SubHeader>
      <TypographyContainer backgroundColor={theme.color.primary[800]}>
        <HeadingContainer borderColor={theme.color.primary[600]}>
          {sections.map((section, index) => {
            const isLastSection = index === sections.length - 1;

            return (
              <Section borderColor={isLastSection ? "none" : theme.color.primary[600]}>
                <SectionTitle>
                  {fontWeights.map(fontWeight => (
                    <Heading
                      size={section.size}
                      fontWeight={fontWeight}
                    >
                      Heading {section.size.toUpperCase()}
                    </Heading>
                  ))}
                </SectionTitle>
                <InformationSection>
                  <Information
                    title="Size"
                    value={section.information.size}
                  />
                  <Information
                    title="Line Height"
                    value={section.information.lineHeight}
                  />
                  <Information
                    title="Letter Spacing"
                    value={section.information.letterSpacing}
                  />
                </InformationSection>
              </Section>
            );
          })}
        </HeadingContainer>
        <ParagraphContainer>
          {sections.map((section, index) => {
            const isLastSection = index === sections.length - 1;

            return (
              <Section borderColor={isLastSection ? "none" : theme.color.primary[600]}>
                <SectionTitle>
                  {fontWeights.map(fontWeight => (
                    <Paragraph
                      size={section.size}
                      fontWeight={fontWeight}
                    >
                      Body {section.size.toUpperCase()}
                    </Paragraph>
                  ))}
                </SectionTitle>
                <InformationSection>
                  <Information
                    title="Size"
                    value={section.information.size}
                  />
                  <Information
                    title="Line Height"
                    value={section.information.lineHeight}
                  />
                  <Information
                    title="Letter Spacing"
                    value={section.information.letterSpacing}
                  />
                </InformationSection>
              </Section>
            );
          })}
        </ParagraphContainer>
      </TypographyContainer>
    </StoryCard>
  );
};
