import React from "react";
import { StoryCard } from "../utils/story-card/story-card";
import { Avatar } from "../../components/avatar/avatar";
import AdamGreen from "../../../assets/svg/profils/AdamGreen.svg";

export default {
  title: "Avatars",
};

export const Overview = () => {
  return (
    <StoryCard title="Avatars">
      <Avatar
        avatar={AdamGreen}
        status="busy"
        withStatus
      />
    </StoryCard>
  );
};
