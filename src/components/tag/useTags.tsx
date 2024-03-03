import { useArtificium } from "../../hooks/useArtificum";
import { Variant } from "../../types/variant";

export interface useTagsProps {
  variant?: Variant;
  customColor?: string;
}

export const useTags = ({ variant, customColor }: useTagsProps) => {
  const { theme } = useArtificium();

  const colors = {
    primary: theme.color.primary[300],
    secondary: theme.color.secondary[300],
    tertiary: theme.color.tertiary[400],
    quaternary: theme.color.quaternary[500],
    quinary: theme.color.quinary[500],
    senary: theme.color.senary[500],
    warn: theme.color.warn[600],
    error: theme.color.error[600],
    valid: theme.color.primary[300],
  };

  const color = customColor ?? colors[variant];
  const fontFamily = theme.font.paragraph.family.bold;

  return { fontFamily, color };
};
