import styled, { css } from "styled-components";
import { ButtonType } from "../../../types/buttonType";

const getTypeStyles = (type: ButtonType) => {
  if (type === "outlined") return OutlineButtonStyle;
  if (type === "ghost") return GhostButtonStyle;
  if (type === "glass") return GlassButtonStyle;
  return "";
};

export const OutlineButtonStyle = css<{
  color: string;
  activeColor: string;
  hoverColor: string;
}>`
  background-color: transparent;
  outline: 3px solid ${({ color }) => color};

  &:hover {
    background-color: transparent;
    outline: 3px solid ${({ hoverColor }) => hoverColor};
  }

  &:active {
    background-color: transparent;
    outline: 3px solid ${({ activeColor }) => activeColor};
  }
`;

export const GhostButtonStyle = css<{
  color: string;
  activeColor: string;
  hoverColor: string;
  forceState?: "active" | "hover";
}>`
  background-color: ${({ forceState, color }) => (forceState ? color : "transparent")};

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }

  &:active {
    background-color: ${({ activeColor }) => activeColor};
  }
`;

export const GlassButtonStyle = css`
  box-shadow:
    inset 16px 24px 64px #ffffff14,
    inset 0px 8px 12px 0px #ffffff38,
    inset 0 24px 24px -16px #00000045;
  background: linear-gradient(to bottom right, #d7eded2e 0%, #ccebeb14 100%);

  &:hover {
    background: linear-gradient(to bottom right, #d7eded2e 0%, #ccebeb14 100%);
  }

  &:active {
    background: linear-gradient(to bottom right, #d7eded2e 0%, #ccebeb14 100%);
  }
`;

export const IconButtonContainer = styled.div<{
  iconSize: string;
  color: string;
  activeColor: string;
  hoverColor: string;
  buttonType: ButtonType;
  forceState?: "active" | "hover";
}>`
  cursor: pointer;
  width: ${({ iconSize }) => iconSize};
  height: ${({ iconSize }) => iconSize};
  padding: ${({ iconSize }) => `calc(${iconSize} / 2)`};
  border-radius: ${({ iconSize }) => `calc(${iconSize} / 2)`};
  background-color: ${({ color }) => color};

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }

  &:active {
    background-color: ${({ activeColor }) => activeColor};
  }

  ${({ buttonType }) => getTypeStyles(buttonType)};
`;
