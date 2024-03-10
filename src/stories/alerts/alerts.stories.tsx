import React from "react";
import { useArtificium } from "../../hooks/useArtificum";
import { StoryCard } from "../utils/story-card/story-card";
import { AlertContainer, PreviewAlertsContainer } from "./alerts.style";
import { Alert } from "../../components/alert/alert";
import { Paragraph } from "../../components";

export default {
  title: "Alerts",
};

export const Overview = () => {
  const { theme } = useArtificium();

  return (
    <StoryCard title="Alerts">
      <AlertContainer backgroundColor={theme.color.primary[800]}>
        <PreviewAlertsContainer
          backgroundColor={theme.color.primary[700]}
          borderColor={theme.color.primary[500]}
        >
          <Alert
            alertType="information"
            duration="infinite"
          >
            <Paragraph
              size="s"
              color={theme.color.primary[400]}
            >
              Tip: From now Artificium has memorized the name '
              <Paragraph
                size="s"
                fontWeight="bold"
                color={theme.color.quinary[500]}
                isSpan
              >
                Cosmic Voyager
              </Paragraph>
              ' and added it to your project{" "}
              <Paragraph
                size="s"
                fontWeight="bold"
                color={theme.color.secondary[500]}
                isSpan
              >
                Library.
              </Paragraph>
            </Paragraph>
          </Alert>
          <Alert
            alertType="warn"
            duration="infinite"
          >
            This action cannot be undone.
          </Alert>
          <Alert
            alertType="error"
            duration="infinite"
          >
            Please try again later.
          </Alert>
          <Alert
            alertType="success"
            duration="infinite"
          >
            Your changes have been saved.
          </Alert>
        </PreviewAlertsContainer>

        <PreviewAlertsContainer
          backgroundColor={theme.color.primary[700]}
          borderColor={theme.color.primary[500]}
        >
          <Alert
            alertType="information"
            duration="infinite"
            title="Title"
            isClosable
          >
            Artificium can memorize things.
          </Alert>
          <Alert
            alertType="warn"
            duration="infinite"
            title="Title"
            isClosable
          >
            This action cannot be undone.
          </Alert>
          <Alert
            alertType="error"
            duration="infinite"
            title="Title"
            isClosable
          >
            Please try again later.
          </Alert>
          <Alert
            alertType="success"
            duration="infinite"
            title="Title"
            isClosable
          >
            Your changes have been saved.
          </Alert>
        </PreviewAlertsContainer>

        <PreviewAlertsContainer
          backgroundColor={theme.color.primary[700]}
          borderColor={theme.color.primary[500]}
        >
          <Alert
            alertType="information"
            duration="infinite"
            isClosable
          >
            Artificium can memorize things.
          </Alert>
          <Alert
            alertType="warn"
            duration="infinite"
            isClosable
          >
            This action cannot be undone.
          </Alert>
          <Alert
            alertType="error"
            duration="infinite"
            isClosable
          >
            Please try again later.
          </Alert>
          <Alert
            alertType="success"
            duration="infinite"
            isClosable
          >
            Your changes have been saved.
          </Alert>
        </PreviewAlertsContainer>
      </AlertContainer>
    </StoryCard>
  );
};
