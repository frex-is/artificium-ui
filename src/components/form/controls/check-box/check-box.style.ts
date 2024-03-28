import styled from "styled-components";

export const CheckBoxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckBox = styled.div<{
  gradient: string;
  borderColor: string;
  backgroundColor: string;
  selected: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  ${({ selected, backgroundColor, gradient }) =>
    selected
      ? `background: linear-gradient(to bottom left, ${gradient});`
      : `background: ${backgroundColor};`}
  border-radius: 3px;
  transition: all 150ms;
  outline: 1px solid ${({ borderColor }) => borderColor};

  &:hover {
    outline: 2px solid ${({ selected, borderColor }) => !selected && borderColor};
  }
`;
