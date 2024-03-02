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

  const fontSize = theme.font.paragraph.size[size];
  const lineHeight = theme.font.paragraph.lineHeight[size];
  const letterSpacing = theme.font.paragraph.letterSpacing[size];
  const fontFamily = theme.font.paragraph.family[fontWeight];
  const textColor = color ?? theme.color.primary[100];

  return { fontSize, lineHeight, letterSpacing, fontFamily, textColor };
};
