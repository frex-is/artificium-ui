import React, { ReactNode } from "react";
import { useAlert } from "./useAlert";
import { AlertContainer, AlertIconContainer } from "./alert.style";
import { useArtificium } from "../../hooks/useArtificum";
import { AlertType } from "../../types/alertType";
import { CrossCircleIcon } from "../icons";
import { Duration } from "../../types/duration";

export interface AlertProps {
  alertType: AlertType;
  duration: Duration;
  onClose?: (isExitingByUser: boolean) => void;
  children: ReactNode;
  isClosable?: boolean;
}

export const Alert = ({
  alertType,
  duration,
  onClose,
  children,
  isClosable = false,
}: AlertProps) => {
  const { theme } = useArtificium();
  const { alertColor, message, icon, visible, closeAlert } = useAlert({
    alertType,
    duration,
    children,
    onClose,
  });

  return (
    <AlertContainer
      isVisible={visible}
      backgroundColor={theme.color.primary[900]}
    >
      <AlertIconContainer color={alertColor}>{icon}</AlertIconContainer> {message}
      {isClosable && (
        <CrossCircleIcon
          style={{ cursor: "pointer" }}
          onClick={() => closeAlert()}
        />
      )}
    </AlertContainer>
  );
};
