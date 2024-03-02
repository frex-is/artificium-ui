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

  const fontSize = theme.font.heading.size[size];
  const lineHeight = theme.font.heading.lineHeight[size];
  const letterSpacing = theme.font.heading.letterSpacing[size];
  const fontFamily = theme.font.heading.family[fontWeight];
  const textColor = color ?? theme.color.primary[100];

  return { fontFamily, fontSize, lineHeight, letterSpacing, textColor };
};
