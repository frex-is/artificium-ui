import React from "react";
import { Circle, HiddenToggle, StyledToggle, ToggleContainer } from "./toggle.style";
import { useArtificium } from "../../../../hooks/useArtificum";
import { useToggle } from "./useToggle";

export interface ToggleProps {
  /**
   * The initial state of the toggle button. Optional, defaults to false.
   */
  isSelected?: boolean;
}

/**
 * Represents a toggle button component with the artificium theme applied to it.
 *
 * @component
 * @param props `ToggleProps` - The properties of the Toggle component.
 * @param props.isSelected `Optional<boolean>` - The initial state of the toggle button. Optional, defaults to false.
 *
 * @returns {JSX.Element} A Toggle component.
 */
export const Toggle: React.FunctionComponent<ToggleProps> = ({ isSelected }) => {
  const { selected, setSelected } = useToggle({ isSelected });
  const { theme } = useArtificium();

  return (
    <ToggleContainer onClick={() => setSelected(!selected)}>
      <HiddenToggle />
      <StyledToggle
        borderColor={theme.color.primary[500]}
        gradient={theme.gradient.primary}
        backgroundColor={theme.color.primary[600]}
        selected={selected}
      >
        <Circle
          selected={selected}
          color={theme.color.primary[500]}
          selectedColor={theme.color.secondary[900]}
        />
      </StyledToggle>
    </ToggleContainer>
  );
};
