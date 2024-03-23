import React, { ReactElement, ReactNode } from "react";
import { ButtonType } from "../../../types/buttonType";
import { IconButtonContainer } from "./icon-button.style";
import { Size } from "../../../types/size";
import { useIconButton } from "./useIconButton";
import { Variant } from "../../../types/variant";

export interface IconButtonProps {
  icon: ReactElement;
  type: ButtonType;
  size: Size & ("s" | "m" | "l");
  variant: Variant;
  forceState?: "active" | "hover";
}

export const IconButton = ({ icon, type, size, variant, forceState }: IconButtonProps) => {
  const { activeColor, hoverColor, buttonColor, renderedIcon, iconSize } = useIconButton({
    icon,
    size,
    variant,
    forceState,
    type,
  });

  return (
    <IconButtonContainer
      color={buttonColor}
      iconSize={iconSize}
      activeColor={activeColor}
      hoverColor={hoverColor}
      buttonType={type}
      forceState={forceState}
    >
      {renderedIcon}
    </IconButtonContainer>
  );
};

IconButton.defaultProps = {
  forceState: undefined,
};
