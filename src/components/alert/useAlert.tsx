import React, { ReactNode, useEffect, useState } from "react";
import { AlertType } from "../../types/alertType";
import { AlertHexagonIcon, AlertTriangleIcon, BulbIcon, CheckCircleIcon } from "../icons";
import { Paragraph } from "../typography";
import { useArtificium } from "../../hooks/useArtificum";
import { Duration } from "../../types/duration";

export interface useAlertProps {
  alertType: AlertType;
  duration: Duration;
  title: ReactNode;
  children: ReactNode;
  onClose: (isExitingByUser: boolean) => void;
}

export const useAlert = ({ alertType, duration, children, onClose, title }: useAlertProps) => {
  const { theme } = useArtificium();
  const [visible, setVisible] = useState(true);

  const alertColor = {
    success: theme.color.valid[600],
    information: theme.color.secondary[500],
    error: theme.color.error[600],
    warn: theme.color.warn[600],
  }[alertType];

  useEffect(() => {
    if (duration === "infinite") {
      return;
    }

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

  const getTitleComponent = (): ReactNode => {
    const titleAlreadyBuilt = typeof title !== "string" && typeof title !== "number";

    if (titleAlreadyBuilt) {
      return title;
    }

    return (
      <Paragraph
        size="l"
        fontWeight="semiBold"
        color={theme.color.primary[0]}
        isSpan
      >
        {title}
      </Paragraph>
    );
  };

  const icon = getAlertIcon();
  const titleComponent = getTitleComponent();
  const message = getMessage();

  return { titleComponent, alertColor, message, icon, visible, closeAlert };
};
