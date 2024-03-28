import React, { FunctionComponent } from "react";
import { CheckBoxContainer, HiddenCheckbox, StyledCheckBox } from "./check-box.style";
import { useArtificium } from "../../../../hooks/useArtificum";
import { CheckIcon } from "../../../icons";
import { useCheckBox } from "./useCheckBox";

export interface CheckBoxProps {
  /**
   * The initial state of the checkbox. Optional, defaults to false.
   */
  isSelected?: boolean;
  /**
   * The function to be called when the checkbox is clicked.
   */
  onClick?: () => void;
}

/**
 * Represents a checkbox component with the artificium theme applied to it.
 *
 * @component
 * @param props `CheckBoxProps` - The properties of the CheckBox component.
 * @param props.isSelected `Optional<boolean>` - The initial state of the checkbox. Optional, defaults to false.
 *
 * @returns {JSX.Element} A CheckBox component.
 */
export const CheckBox: FunctionComponent<CheckBoxProps> = ({ isSelected, onClick }) => {
  const { selected, onSelectCheckBox } = useCheckBox({ isSelected, onClick });
  const { theme } = useArtificium();

  return (
    <CheckBoxContainer onClick={() => onSelectCheckBox()}>
      <HiddenCheckbox />
      <StyledCheckBox
        borderColor={theme.color.primary[500]}
        gradient={theme.gradient.primary}
        backgroundColor={theme.color.primary[600]}
        selected={selected}
      >
        {selected && (
          <CheckIcon
            width="12px"
            height="12px"
            strokeWidth={4}
            stroke={theme.color.secondary[900]}
          />
        )}
      </StyledCheckBox>
    </CheckBoxContainer>
  );
};

CheckBox.defaultProps = {
  isSelected: false,
};
