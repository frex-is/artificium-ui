import { useArtificium } from "../../hooks/useArtificum";
import { Variant } from "../../types/variant";

export interface useTagsProps {
  variant?: Variant;
  customColor?: string;
}

export const useTags = ({ variant, customColor }: useTagsProps) => {
  const { theme } = useArtificium();

  const getColor = () => {
    switch (variant) {
      case "primary":
        return theme.color.primary[300];
      case "secondary":
        return theme.color.secondary[300];
      case "tertiary":
        return theme.color.tertiary[400];
      case "quaternary":
        return theme.color.quaternary[500];
      case "quinary":
        return theme.color.quinary[500];
      case "senary":
        return theme.color.senary[500];
      case "warn":
        return theme.color.warn[600];
      case "error":
        return theme.color.error[600];
      case "valid":
        return theme.color.valid[600];
      default:
        return theme.color.primary[300];
    }
  };

  const color = customColor ?? getColor();

  return { color };
};
