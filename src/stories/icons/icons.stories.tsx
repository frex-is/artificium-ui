import React from "react";

import {
  AlertCircleSolidIcon,
  AlertCircleIcon,
  AlertHexagonSolidIcon,
  AlertHexagonIcon,
  AlertOctagonSolidIcon,
  AlertOctagonIcon,
  AlertSquareSolidIcon,
  AlertSquareIcon,
  AlertTriangleSolidIcon,
  AlertTriangleIcon,
  ArrowDownLeftTinyIcon,
  ArrowDownLeftIcon,
  ArrowDownRightTinyIcon,
  ArrowDownRightIcon,
  ArrowDownTinyIcon,
  ArrowDownIcon,
  ArrowLeftTinyIcon,
  ArrowLeftIcon,
  ArrowRightTinyIcon,
  ArrowRightIcon,
  ArrowUpLeftTinyIcon,
  ArrowUpLeftIcon,
  ArrowUpRightTinyIcon,
  ArrowUpRightIcon,
  ArrowUpTinyIcon,
  ArrowUpIcon,
  ArtificiumIcon,
  AttachmentIcon,
  BulbIcon,
  CalendarCheckIcon,
  CalendarCrossIcon,
  CalendarCrossedIcon,
  CalendarDayIcon,
  CalendarEditIcon,
  CalendarEmptyIcon,
  CalendarLineIcon,
  CalendarMinusIcon,
  CalendarPlusIcon,
  Chart02Icon,
  Chart03Icon,
  Chart04Icon,
  Chart05Icon,
  Chart06Icon,
  Chart07Icon,
  Chart08Icon,
  ChartIcon,
  ChatBubble02Icon,
  ChatBubbleIcon,
  CheckCircleSolidIcon,
  CheckCircleIcon,
  CheckHexagonSolidIcon,
  CheckHexagonIcon,
  CheckSquareSolidIcon,
  CheckSquareIcon,
  CheckTriangleSolidIcon,
  CheckTriangleIcon,
  CheckIcon,
  ChevronDownTinyIcon,
  ChevronDownIcon,
  ChevronLeftTinyIcon,
  ChevronLeftIcon,
  ChevronRightTinyIcon,
  ChevronRightIcon,
  ChevronUpTinyIcon,
  ChevronUpIcon,
  CircleIcon,
  ClockArrowIcon,
  ClockCrossedIcon,
  ClockIcon,
  CodeIcon,
  CogIcon,
  CommentCircleIcon,
  CommentIcon,
  Compass02Icon,
  Compass03Icon,
  CompassIcon,
  CopyIcon,
  CreditCardCheckIcon,
  CreditCardCrossedIcon,
  CreditCardIcon,
  CropIcon,
  CrossCircleSolidIcon,
  CrossCircleIcon,
  CrossHexagonSolidIcon,
  CrossHexagonIcon,
  CrossSquareSolidIcon,
  CrossSquareIcon,
  CrossTriangleSolidIcon,
  CrossTriangleIcon,
  CrossIcon,
  DashbaordIcon,
  DistortionIcon,
  DocumentIcon,
  DotsIcon,
  DoubleChevronDownTinyIcon,
  DoubleChevronDownIcon,
  DoubleChevronLeftTinyIcon,
  DoubleChevronLeftIcon,
  DoubleChevronRightTinyIcon,
  DoubleChevronRightIcon,
  DoubleChevronUpTinyIcon,
  DoubleChevronUpIcon,
  DownloadIcon,
  EditSquareIcon,
  EditIcon,
  EyeCrossIcon,
  EyeIcon,
  FaceConfoundedIcon,
  FaceHappy02Icon,
  FaceHappyWinkIcon,
  FaceLaughWinkIcon,
  FaceLaughIcon,
  FaceNeutralIcon,
  FaceSad02Icon,
  FaceSadIcon,
  FacebookIcon,
  FigmaIcon,
  FolderIcon,
  FullCrossCircleIcon,
  FullScreenIcon,
  GlobeIcon,
  HeartCrossedIcon,
  HeartIcon,
  HexagonIcon,
  HomeIcon,
  IdCard02Icon,
  IdCardIcon,
  ImageIcon,
  InfoCircleSolidIcon,
  InfoCircleIcon,
  InfoHexagonSolidIcon,
  InfoHexagonIcon,
  InfoOctagonSolidIcon,
  InfoOctagonIcon,
  InfoSquareSolidIcon,
  InfoSquareIcon,
  InfoTriangleSolidIcon,
  InfoTriangleIcon,
  InstagramIcon,
  InternetIcon,
  LinkIcon,
  MagicWandIcon,
  Mail02Icon,
  Mail03Icon,
  MailIcon,
  MicrophoneIcon,
  NoteIcon,
  OctagonIcon,
  PadLockOpenIcon,
  PadLockIcon,
  PaperPlaneIcon,
  PencilIcon,
  PhoneIcon,
  Pin02Icon,
  Pin03Icon,
  PinIcon,
  PlayIcon,
  PlusCircleIcon,
  PlusTinyIcon,
  PlusIcon,
  PuzzleIcon,
  RotateLeftIcon,
  RotateRightIcon,
  RotateIcon,
  SearchIcon,
  ShareIcon,
  SlashIcon,
  SlidersIcon,
  SquareIcon,
  StarIcon,
  SunIcon,
  ThunderIcon,
  TriangleIcon,
  UserCheckIcon,
  UserCircleIcon,
  UserClockIcon,
  UserCogIcon,
  UserCrossIcon,
  UserCrossedIcon,
  UserEditIcon,
  UserLoveIcon,
  UserMinusIcon,
  UserPlusIcon,
  UserSearchIcon,
  UserIcon,
  Users02Icon,
  UsersIcon,
  WatchIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "../../components/icons";
import { IconContainer, Row } from "./icons.style";
import { useChunk } from "../../hooks/useChunk";
import { ArtificiumProvider } from "../../providers";
import { useArtificium } from "../../hooks/useArtificum";
import { StoryCard } from "../utils/story-card/story-card";

export default {
  title: "Icons",
};

// TODO : add option to stroke for all icon HF moi du futur :)

const IconsCard = () => {
  const { theme } = useArtificium();
  const { listOfChunks } = useChunk(
    [
      AlertCircleSolidIcon,
      AlertCircleIcon,
      AlertHexagonSolidIcon,
      AlertHexagonIcon,
      AlertOctagonSolidIcon,
      AlertOctagonIcon,
      AlertSquareSolidIcon,
      AlertSquareIcon,
      AlertTriangleSolidIcon,
      AlertTriangleIcon,
      ArrowDownLeftTinyIcon,
      ArrowDownLeftIcon,
      ArrowDownRightTinyIcon,
      ArrowDownRightIcon,
      ArrowDownTinyIcon,
      ArrowDownIcon,
      ArrowLeftTinyIcon,
      ArrowLeftIcon,
      ArrowRightTinyIcon,
      ArrowRightIcon,
      ArrowUpLeftTinyIcon,
      ArrowUpLeftIcon,
      ArrowUpRightTinyIcon,
      ArrowUpRightIcon,
      ArrowUpTinyIcon,
      ArrowUpIcon,
      ArtificiumIcon,
      AttachmentIcon,
      BulbIcon,
      CalendarCheckIcon,
      CalendarCrossIcon,
      CalendarCrossedIcon,
      CalendarDayIcon,
      CalendarEditIcon,
      CalendarEmptyIcon,
      CalendarLineIcon,
      CalendarMinusIcon,
      CalendarPlusIcon,
      Chart02Icon,
      Chart03Icon,
      Chart04Icon,
      Chart05Icon,
      Chart06Icon,
      Chart07Icon,
      Chart08Icon,
      ChartIcon,
      ChatBubble02Icon,
      ChatBubbleIcon,
      CheckCircleSolidIcon,
      CheckCircleIcon,
      CheckHexagonSolidIcon,
      CheckHexagonIcon,
      CheckSquareSolidIcon,
      CheckSquareIcon,
      CheckTriangleSolidIcon,
      CheckTriangleIcon,
      CheckIcon,
      ChevronDownTinyIcon,
      ChevronDownIcon,
      ChevronLeftTinyIcon,
      ChevronLeftIcon,
      ChevronRightTinyIcon,
      ChevronRightIcon,
      ChevronUpTinyIcon,
      ChevronUpIcon,
      CircleIcon,
      ClockArrowIcon,
      ClockCrossedIcon,
      ClockIcon,
      CodeIcon,
      CogIcon,
      CommentCircleIcon,
      CommentIcon,
      Compass02Icon,
      Compass03Icon,
      CompassIcon,
      CopyIcon,
      CreditCardCheckIcon,
      CreditCardCrossedIcon,
      CreditCardIcon,
      CropIcon,
      CrossCircleSolidIcon,
      CrossCircleIcon,
      CrossHexagonSolidIcon,
      CrossHexagonIcon,
      CrossSquareSolidIcon,
      CrossSquareIcon,
      CrossTriangleSolidIcon,
      CrossTriangleIcon,
      CrossIcon,
      DashbaordIcon,
      DistortionIcon,
      DocumentIcon,
      DotsIcon,
      DoubleChevronDownTinyIcon,
      DoubleChevronDownIcon,
      DoubleChevronLeftTinyIcon,
      DoubleChevronLeftIcon,
      DoubleChevronRightTinyIcon,
      DoubleChevronRightIcon,
      DoubleChevronUpTinyIcon,
      DoubleChevronUpIcon,
      DownloadIcon,
      EditSquareIcon,
      EditIcon,
      EyeCrossIcon,
      EyeIcon,
      FaceConfoundedIcon,
      FaceHappy02Icon,
      FaceHappyWinkIcon,
      FaceLaughWinkIcon,
      FaceLaughIcon,
      FaceNeutralIcon,
      FaceSad02Icon,
      FaceSadIcon,
      FacebookIcon,
      FigmaIcon,
      FolderIcon,
      FullCrossCircleIcon,
      FullScreenIcon,
      GlobeIcon,
      HeartCrossedIcon,
      HeartIcon,
      HexagonIcon,
      HomeIcon,
      IdCard02Icon,
      IdCardIcon,
      ImageIcon,
      InfoCircleSolidIcon,
      InfoCircleIcon,
      InfoHexagonSolidIcon,
      InfoHexagonIcon,
      InfoOctagonSolidIcon,
      InfoOctagonIcon,
      InfoSquareSolidIcon,
      InfoSquareIcon,
      InfoTriangleSolidIcon,
      InfoTriangleIcon,
      InstagramIcon,
      InternetIcon,
      LinkIcon,
      MagicWandIcon,
      Mail02Icon,
      Mail03Icon,
      MailIcon,
      MicrophoneIcon,
      NoteIcon,
      OctagonIcon,
      PadLockOpenIcon,
      PadLockIcon,
      PaperPlaneIcon,
      PencilIcon,
      PhoneIcon,
      Pin02Icon,
      Pin03Icon,
      PinIcon,
      PlayIcon,
      PlusCircleIcon,
      PlusTinyIcon,
      PlusIcon,
      PuzzleIcon,
      RotateLeftIcon,
      RotateRightIcon,
      RotateIcon,
      SearchIcon,
      ShareIcon,
      SlashIcon,
      SlidersIcon,
      SquareIcon,
      StarIcon,
      SunIcon,
      ThunderIcon,
      TriangleIcon,
      UserCheckIcon,
      UserCircleIcon,
      UserClockIcon,
      UserCogIcon,
      UserCrossIcon,
      UserCrossedIcon,
      UserEditIcon,
      UserLoveIcon,
      UserMinusIcon,
      UserPlusIcon,
      UserSearchIcon,
      UserIcon,
      Users02Icon,
      UsersIcon,
      WatchIcon,
      ZoomInIcon,
      ZoomOutIcon,
    ],
    14,
  );

  return (
    <StoryCard title="Icons">
      <IconContainer backgroundColor={theme.color.primary[800]}>
        {listOfChunks.map((iconChunk, i) => (
          <Row key={i}>{iconChunk.map((icon, ii) => icon({ key: ii }))}</Row>
        ))}
      </IconContainer>
    </StoryCard>
  );
};

export const Overview = () => (
  <ArtificiumProvider>
    <IconsCard />
  </ArtificiumProvider>
);
