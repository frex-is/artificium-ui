import React, { ReactNode } from "react";
import { useAlert } from "./useAlert";
import {
  AlertContainer,
  AlertIconContainer,
  AlertTitleContainer,
  AlertTitleContentContainer,
} from "./alert.style";
import { useArtificium } from "../../hooks/useArtificum";
import { AlertType } from "../../types/alertType";
import { CrossCircleIcon } from "../icons";
import { Duration } from "../../types/duration";

export interface AlertProps {
  alertType: AlertType;
  duration?: Duration;
  onClose?: (isExitingByUser: boolean) => void;
  children: ReactNode;
  isClosable?: boolean;
  title?: ReactNode;
}

interface NoTitleAlertProps {
  alertColor: string;
  message: ReactNode;
  icon: ReactNode;
  closeAlert: () => void;
  isClosable: boolean;
}

interface TitleAlertProps {
  alertColor: string;
  message: ReactNode;
  icon: ReactNode;
  closeAlert: () => void;
  isClosable: boolean;
  title: ReactNode;
}

const NoTitleAlert = ({ alertColor, message, icon, closeAlert, isClosable }: NoTitleAlertProps) => (
  <>
    <AlertIconContainer color={alertColor}>{icon}</AlertIconContainer> {message}
    {isClosable && (
      <CrossCircleIcon
        style={{ cursor: "pointer" }}
        onClick={() => closeAlert()}
      />
    )}
  </>
);

const TitleAlert = ({
  alertColor,
  message,
  icon,
  closeAlert,
  isClosable,
  title,
}: TitleAlertProps) => (
  <>
    <AlertIconContainer color={alertColor}>{icon}</AlertIconContainer>
    <AlertTitleContentContainer>
      <AlertTitleContainer>
        {title}
        {isClosable && (
          <CrossCircleIcon
            style={{ cursor: "pointer" }}
            onClick={() => closeAlert()}
          />
        )}
      </AlertTitleContainer>
      {message}
    </AlertTitleContentContainer>
  </>
);

export const Alert = ({
  alertType,
  duration,
  onClose,
  children,
  isClosable,
  title,
}: AlertProps) => {
  const { theme } = useArtificium();
  const { titleComponent, alertColor, message, icon, visible, closeAlert } = useAlert({
    alertType,
    duration,
    children,
    onClose,
    title,
  });

  const alertComponent = title ? (
    <TitleAlert
      alertColor={alertColor}
      message={message}
      icon={icon}
      closeAlert={closeAlert}
      isClosable={isClosable}
      title={titleComponent}
    />
  ) : (
    <NoTitleAlert
      alertColor={alertColor}
      message={message}
      icon={icon}
      closeAlert={closeAlert}
      isClosable={isClosable}
    />
  );

  return (
    <AlertContainer
      isVisible={visible}
      backgroundColor={theme.color.primary[900]}
    >
      {alertComponent}
    </AlertContainer>
  );
};

Alert.defaultProps = {
  duration: 1000,
  isClosable: false,
  title: undefined,
  onClose: () => {},
};
