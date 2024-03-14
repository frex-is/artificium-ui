import { ReactElement, ReactNode, cloneElement } from "react";
import { Size } from "../../../types/size";
import { useArtificium } from "../../../hooks/useArtificum";
import { Variant } from "../../../types/variant";
import { ButtonType } from "../../../types/buttonType";

export interface useIconButtonProps {
  icon: ReactElement;
  size: Size & ("s" | "m" | "l");
  variant: Variant;
  forceState?: "active" | "hover";
  type: ButtonType;
}

export const useIconButton = ({ icon, size, variant, forceState, type }: useIconButtonProps) => {
  const { theme } = useArtificium();

  const iconSize = {
    s: "16px",
    m: "20px",
    l: "24px",
  }[size];

  const variantColor = {
    primary: theme.color.primary[600],
    secondary: theme.color.secondary[500],
    tertiary: theme.color.tertiary[500],
    quaternary: theme.color.quaternary[500],
    quinary: theme.color.quinary[500],
    senary: theme.color.senary[500],
    warn: theme.color.warn[600],
    valid: theme.color.valid[600],
    error: theme.color.error[600],
  }[variant];

  const activeColor = {
    primary: theme.color.primary[400],
    secondary: theme.color.secondary[300],
    tertiary: theme.color.tertiary[300],
    quaternary: theme.color.quaternary[300],
    quinary: theme.color.quinary[300],
    senary: theme.color.senary[300],
    warn: theme.color.warn[900],
    valid: theme.color.valid[900],
    error: theme.color.error[900],
  }[variant];

  const hoverColor = {
    primary: theme.color.primary[500],
    secondary: theme.color.secondary[400],
    tertiary: theme.color.tertiary[400],
    quaternary: theme.color.quaternary[400],
    quinary: theme.color.quinary[400],
    senary: theme.color.senary[400],
    warn: theme.color.warn[100],
    valid: theme.color.valid[100],
    error: theme.color.error[100],
  }[variant];

  const iconBaseProps = {
    width: iconSize,
    height: iconSize,
  };

  const outlinedIconsProps = {
    ...iconBaseProps,
    stroke: variantColor,
  };

  const renderedIcon = cloneElement(icon, type === "outlined" ? outlinedIconsProps : iconBaseProps);
  const buttonColor =
    forceState === undefined ? variantColor : forceState === "active" ? activeColor : hoverColor;

  return { buttonColor, activeColor, hoverColor, renderedIcon, iconSize };
};
