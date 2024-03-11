import React from "react";
import { StoryCard } from "../utils/story-card/story-card";
import { Avatar } from "../../components/avatar/avatar";
import AdamGreen from "../../../assets/svg/profils/AdamGreen.svg";
import AndrewGarcia from "../../../assets/svg/profils/AndrewGarcia.svg";
import AvaGupta from "../../../assets/svg/profils/AvaGupta.svg";
import BenjaminKim from "../../../assets/svg/profils/BenjaminKim.svg";
import DavidSingh from "../../../assets/svg/profils/DavidSingh.svg";
import EmilyLiu from "../../../assets/svg/profils/EmilyLiu.svg";
import HarperSingh from "../../../assets/svg/profils/HarperSingh.svg";
import IsabellaChen from "../../../assets/svg/profils/IsabellaChen.svg";
import LilyPatel from "../../../assets/svg/profils/LilyPatel.svg";
import MarcusChen from "../../../assets/svg/profils/MarcusChen.svg";
import MiaPark from "../../../assets/svg/profils/MiaPark.svg";
import OliviaSharma from "../../../assets/svg/profils/OliviaSharma.svg";
import RyanLee from "../../../assets/svg/profils/RyanLee.svg";
import SophiaZhang from "../../../assets/svg/profils/SophiaZhang.svg";
import TylerPatel from "../../../assets/svg/profils/TylerPatel.svg";
import { AvatarsContainer, ContentContainer, StatusContainer } from "./avatar.style";
import { useArtificium } from "../../hooks/useArtificum";
import { Status } from "../../components/status/status";

export default {
  title: "Avatars",
};

export const Overview = () => {
  const { theme } = useArtificium();

  return (
    <StoryCard title="Avatars">
      <ContentContainer backgroundColor={theme.color.primary[800]}>
        <AvatarsContainer
          backgroundColor={theme.color.primary[800]}
          borderColor={theme.color.primary[500]}
        >
          <Avatar avatar={AdamGreen} />
          <Avatar avatar={AndrewGarcia} />
          <Avatar avatar={AvaGupta} />
          <Avatar avatar={BenjaminKim} />
          <Avatar avatar={DavidSingh} />
          <Avatar avatar={EmilyLiu} />
          <Avatar avatar={HarperSingh} />
          <Avatar avatar={IsabellaChen} />
          <Avatar avatar={LilyPatel} />
          <Avatar avatar={MarcusChen} />
          <Avatar avatar={MiaPark} />
          <Avatar avatar={OliviaSharma} />
          <Avatar avatar={RyanLee} />
          <Avatar avatar={SophiaZhang} />
          <Avatar avatar={TylerPatel} />
          <Avatar avatar={AdamGreen} />
        </AvatarsContainer>
        <StatusContainer
          backgroundColor={theme.color.primary[800]}
          borderColor={theme.color.primary[500]}
        >
          <Status type="online" />
          <Status type="away" />
          <Status type="busy" />
          <Status type="offline" />
        </StatusContainer>
      </ContentContainer>
    </StoryCard>
  );
};
