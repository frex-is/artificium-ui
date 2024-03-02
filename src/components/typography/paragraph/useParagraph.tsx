import { useArtificium } from "../../../hooks/useArtificum";
import { FontWeight } from "../../../types/fontWeight";
import { Size } from "../../../types/size";

interface useParagraphProps {
  size: Size;
  fontWeight: FontWeight;
  color?: string;
}

export const useParagraph = ({ size, fontWeight, color }: useParagraphProps) => {
  const { theme } = useArtificium();

  const getFontSize = () => {
    switch (size) {
      case "xs":
        return "10px";
      case "s":
        return "12px";
      case "m":
        return "14px";
      case "l":
        return "16px";
      case "xl":
        return "18px";
    }
  };

  const getLineHeight = () => {
    switch (size) {
      case "xs":
        return "16px";
      case "s":
        return "18px";
      case "m":
        return "20px";
      case "l":
        return "24px";
      case "xl":
        return "28px";
    }
  };

  const getLetterSpacing = () => {
    return "0.15px";
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

  return { fontSize, lineHeight, letterSpacing, fontFamily, textColor };
};
