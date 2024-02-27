import { Size } from "../../../types/size";
import { FontWeight } from "../../../types/fontWeight";
import { useArtificium } from "../../../hooks/useArtificum";

interface useHeadingProps {
  size: Size;
  fontWeight: FontWeight;
  color?: string;
}

export const useHeading = ({ size, fontWeight, color }: useHeadingProps) => {
  const { theme } = useArtificium();

  const getFontSize = () => {
    switch (size) {
      case "xs":
        return "20px";
      case "s":
        return "24px";
      case "m":
        return "28px";
      case "l":
        return "32px";
      case "xl":
        return "36px";
    }
  };

  const getLineHeight = () => {
    switch (size) {
      case "xs":
        return "28px";
      case "s":
        return "32px";
      case "m":
        return "36px";
      case "l":
        return "40px";
      case "xl":
        return "44px";
    }
  };

  const getLetterSpacing = () => {
    return "0px";
  };

  const getFontFamily = () => {
    switch (fontWeight) {
      case "regular":
        return theme.font.regular;
      case "medium":
        return theme.font.medium;
      case "semi-bold":
        return theme.font.semiBold;
      case "bold":
        return theme.font.bold;
    }
  };

  const fontSize = getFontSize();
  const lineHeight = getLineHeight();
  const letterSpacing = getLetterSpacing();
  const fontFamily = getFontFamily();
  const textColor = color ?? theme.color.primary[100];

  return { fontFamily, fontSize, lineHeight, letterSpacing, textColor };
};
