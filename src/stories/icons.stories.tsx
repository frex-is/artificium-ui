import React from "react";
import styled from "styled-components";

import {
  PadLockIcon,
  PadLockOpenIcon,
  CrossIcon,
  CheckIcon,
  PlusIcon,
  PlusTinyIcon,
  PlusCircleIcon,
  CogIcon,
  ZoomOutIcon,
  ZoomInIcon,
  SearchIcon,
  FolderIcon,
  DocumentIcon,
  NoteIcon,
  EditIcon,
  EditSquareIcon,
  ArtificiumIcon,
  AttachmentIcon,
  CopyIcon,
  DotsIcon,
  MagicWandIcon,
  MicrophoneIcon,
  PaperPlaneIcon,
  ShareIcon,
  BulbIcon,
  CodeIcon,
  GlobeIcon,
  ImageIcon,
  InternetIcon,
  PencilIcon,
  PlayIcon,
} from "../components/icons";

export default {
  title: "Icons",
};

const Row = styled.div`
  display: flex;
  gap: 48px;
`;

const IconContainer = styled.div`
  background-color: #0d0f10;
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const HeaderContainer = styled.div`
  padding: 64px;
  background: linear-gradient(to bottom left, #82dbf7 0%, #b6f09c 100%);
  border-radius: 24px 24px 0 0;
  display: flex;
`;

const StoryContainer = styled.div`
  width: fit-content;
`;

const PageTitle = styled.p`
  font-family: "jakarta";
  font-size: 40px;
  margin: 0;
`;

export const Icons = () => (
  <StoryContainer>
    <HeaderContainer>
      <PageTitle>Icons</PageTitle>
      <ArtificiumIcon />
    </HeaderContainer>
    <IconContainer>
      <Row>
        <PadLockIcon />
        <PadLockOpenIcon />
        <CrossIcon />
        <CheckIcon />
        <PlusIcon />
        <PlusTinyIcon />
        <PlusCircleIcon />
        <CogIcon />
      </Row>

      <Row>
        <ZoomOutIcon />
        <ZoomInIcon />
        <SearchIcon />
        <FolderIcon />
        <DocumentIcon />
        <NoteIcon />
        <EditIcon />
        <EditSquareIcon />
      </Row>

      <Row>
        <ArtificiumIcon />
        <AttachmentIcon />
        <CopyIcon />
        <DotsIcon />
        <MagicWandIcon />
        <MicrophoneIcon />
        <PaperPlaneIcon />
        <ShareIcon />
      </Row>

      <Row>
        <BulbIcon />
        <CodeIcon />
        <GlobeIcon />
        <ImageIcon />
        <InternetIcon />
        <PencilIcon />
        <PlayIcon />
      </Row>
    </IconContainer>
  </StoryContainer>
);
