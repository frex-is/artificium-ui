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
import {
  AvatarsContainer,
  ContentContainer,
  ExtraContainer,
  StatusContainer,
} from "./avatar.style";
import { useArtificium } from "../../hooks/useArtificum";
import { Status } from "../../components/status/status";
import { User } from "../../components/user/user";

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
          <Avatar
            avatar={AdamGreen}
            status="online"
            withStatus
          />
          <Avatar
            avatar={AndrewGarcia}
            status="away"
            withStatus
          />
          <Avatar
            avatar={AvaGupta}
            status="busy"
            withStatus
          />
          <Avatar
            avatar={BenjaminKim}
            status="offline"
            withStatus
          />
          <Avatar
            avatar={DavidSingh}
            status="online"
            withStatus
          />
          <Avatar
            avatar={EmilyLiu}
            status="away"
            withStatus
          />
          <Avatar
            avatar={HarperSingh}
            status="busy"
            withStatus
          />
          <Avatar
            avatar={IsabellaChen}
            status="offline"
            withStatus
          />
          <Avatar
            avatar={LilyPatel}
            status="online"
            withStatus
          />
          <Avatar
            avatar={MarcusChen}
            status="away"
            withStatus
          />
          <Avatar
            avatar={MiaPark}
            status="busy"
            withStatus
          />
          <Avatar
            avatar={OliviaSharma}
            status="offline"
            withStatus
          />
          <Avatar
            avatar={RyanLee}
            status="online"
            withStatus
          />
          <Avatar
            avatar={SophiaZhang}
            status="away"
            withStatus
          />
          <Avatar
            avatar={TylerPatel}
            status="busy"
            withStatus
          />
          <Avatar
            avatar={AdamGreen}
            status="offline"
            withStatus
          />
        </AvatarsContainer>
        <ExtraContainer>
          <User
            username="Intellisys"
            subname="12 members"
            avatar={OliviaSharma}
          />
          <StatusContainer
            backgroundColor={theme.color.primary[800]}
            borderColor={theme.color.primary[500]}
          >
            <Status type="online" />
            <Status type="away" />
            <Status type="busy" />
            <Status type="offline" />
          </StatusContainer>
        </ExtraContainer>
      </ContentContainer>
    </StoryCard>
  );
};
