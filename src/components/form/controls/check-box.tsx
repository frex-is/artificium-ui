import React from "react";
import { CheckBoxContainer, HiddenCheckbox, StyledCheckBox } from "./check-box.style";
import { useArtificium } from "../../../hooks/useArtificum";
import { CheckIcon } from "../../icons";
import { useCheckBox } from "./useCheckBox";

export interface CheckBoxProps {
  isSelected?: boolean;
}

export const CheckBox = ({ isSelected }: CheckBoxProps) => {
  const { selected, setSelected } = useCheckBox({ isSelected });
  const { theme } = useArtificium();

  return (
    <CheckBoxContainer onClick={() => setSelected(!selected)}>
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
