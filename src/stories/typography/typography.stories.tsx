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
import { Paragraph } from '../../components/typography/paragraph/paragraph';
import { Size } from "../../types/size";

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
  const fontWeights: FontWeight[] = ["regular", "medium", "semiBold", "bold"];
  const sizes: Size[] = ["xl", "l", "m", "s", "xs"];
  const headingSections: any[] = sizes.map(size => ({
    size: size,
    information: {
      size: theme.font.heading.size[size],
      lineHeight: theme.font.heading.lineHeight[size],
      letterSpacing: theme.font.heading.letterSpacing[size],
    },
  }));
  const ParagraphSections: any[] = sizes.map(size => ({
    size: size,
    information: {
      size: theme.font.paragraph.size[size],
      lineHeight: theme.font.paragraph.lineHeight[size],
      letterSpacing: theme.font.paragraph.letterSpacing[size],
    },
  }));

  return (
    <StoryCard title="Typography">
      <SubHeader theme={theme}>
        <FontNameContainer theme={theme}>
          <Heading
            size="xl"
            fontWeight="semiBold"
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
              fontWeight="semiBold"
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
          {headingSections.map((section, index) => {
            const isLastSection = index === headingSections.length - 1;

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
          {ParagraphSections.map((section, index) => {
            const isLastSection = index === headingSections.length - 1;

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
