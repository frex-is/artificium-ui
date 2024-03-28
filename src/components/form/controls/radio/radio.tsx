import React, { FunctionComponent } from "react";
import { RadioContainer, HiddenRadio, StyledRadio, Circle } from "./radio.style";
import { useArtificium } from "../../../../hooks/useArtificum";
import { useRadio } from "./useRadio";

export interface RadioProps {
  /**
   * The initial state of the radio button. Optional, defaults to false.
   */
  isSelected?: boolean;
}

/**
 * Represents a radio button component with the artificium theme applied to it.
 *
 * @component
 * @param props `RadioProps` - The properties of the Radio component.
 * @param props.isSelected `Optional<boolean>` - The initial state of the radio button. Optional, defaults to false.
 *
 * @returns {JSX.Element} A Radio component.
 */
export const Radio: FunctionComponent<RadioProps> = ({ isSelected }) => {
  const { selected, setSelected } = useRadio({ isSelected });
  const { theme } = useArtificium();

  return (
    <RadioContainer onClick={() => setSelected(!selected)}>
      <HiddenRadio />
      <StyledRadio
        borderColor={theme.color.primary[500]}
        gradient={theme.gradient.primary}
        backgroundColor={theme.color.primary[600]}
        selected={selected}
      >
        {selected && <Circle color={theme.color.secondary[900]} />}
      </StyledRadio>
    </RadioContainer>
  );
};
