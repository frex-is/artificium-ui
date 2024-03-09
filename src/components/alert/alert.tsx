import React, { ReactNode } from "react";
import { useAlert } from "./useAlert";
import { AlertContainer, AlertIconContainer } from "./alert.style";
import { useArtificium } from "../../hooks/useArtificum";
import { AlertType } from "../../types/alertType";
import { Paragraph } from "../typography";

export interface AlertProps {
  alertType: AlertType;
  duration: number;
  onClose: (isExitingByUser: boolean) => void;
  children: ReactNode;
}

export const Alert = ({ alertType, duration, onClose, children }: AlertProps) => {
  const { theme } = useArtificium();
  const { alertColor, message, icon, visible, closeAlert } = useAlert({
    alertType,
    duration,
    children,
    onClose,
  });

  return (
    <AlertContainer backgroundColor={theme.color.primary[900]}>
      <AlertIconContainer color={alertColor}>{icon}</AlertIconContainer> {message}
    </AlertContainer>
  );
};

/**
 * <Paragraph
        size="s"
        fontWeight="semiBold"
        color={theme.color.error[600]}
      >
        Something went wrong.
      </Paragraph>
 */
