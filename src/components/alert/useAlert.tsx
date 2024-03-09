import React, { ReactNode, useEffect, useState } from "react";
import { AlertType } from "../../types/alertType";
import { AlertHexagonIcon, AlertTriangleIcon, BulbIcon, CheckCircleIcon } from "../icons";
import { Paragraph } from "../typography";
import { useArtificium } from "../../hooks/useArtificum";

export interface useAlertProps {
  alertType: AlertType;
  duration: number;
  children: ReactNode;
  onClose: (isExitingByUser: boolean) => void;
}

export const useAlert = ({ alertType, duration, children, onClose }: useAlertProps) => {
  const { theme } = useArtificium();
  const [visible, setVisible] = useState(true);

  const alertColor = {
    success: theme.color.valid[600],
    information: theme.color.secondary[500],
    error: theme.color.error[600],
    warn: theme.color.warn[600],
  }[alertType];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const closeAlert = () => {
    setVisible(false);
    onClose(true);
  };

  const getAlertIcon = (): ReactNode => {
    const icons: { [type in AlertType]: ReactNode } = {
      success: <CheckCircleIcon stroke={alertColor} />,
      information: <BulbIcon stroke={alertColor} />,
      error: <AlertHexagonIcon stroke={alertColor} />,
      warn: <AlertTriangleIcon stroke={alertColor} />,
    };

    return icons[alertType];
  };

  const getMessage = (): ReactNode => {
    const messageAlreadyBuilt = typeof children !== "string" && typeof children !== "number";
    const prefixMessage = {
      success: "Success!",
      information: "Did you know?",
      error: "Something went wrong.",
      warn: "Warning!",
    }[alertType];

    if (messageAlreadyBuilt) {
      return children;
    }

    return (
      <Paragraph size="m">
        <Paragraph
          size="m"
          fontWeight="semiBold"
          color={alertColor}
          isSpan
        >
          {prefixMessage}
        </Paragraph>{" "}
        {children}
      </Paragraph>
    );
  };

  const icon = getAlertIcon();
  const message = getMessage();

  return { alertColor, message, icon, visible, closeAlert };
};
