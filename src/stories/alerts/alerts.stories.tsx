import React from "react";
import { useArtificium } from "../../hooks/useArtificum";
import { StoryCard } from "../utils/story-card/story-card";
import { AlertContainer, AutoCloseAlertsContainer } from "./alerts.style";
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
        <AutoCloseAlertsContainer
          backgroundColor={theme.color.primary[700]}
          borderColor={theme.color.primary[500]}
        >
          <Alert
            alertType="information"
            duration={0}
            onClose={() => {}}
          >
            Artificium can memorize things.
          </Alert>
          <Alert
            alertType="warn"
            duration={0}
            onClose={() => {}}
          >
            This action cannot be undone.
          </Alert>
          <Alert
            alertType="error"
            duration={0}
            onClose={() => {}}
          >
            Please try again later.
          </Alert>
          <Alert
            alertType="success"
            duration={0}
            onClose={() => {}}
          >
            Your changes have been saved.
          </Alert>
        </AutoCloseAlertsContainer>
      </AlertContainer>
    </StoryCard>
  );
};

// <Paragraph size="m">hello world !</Paragraph>
