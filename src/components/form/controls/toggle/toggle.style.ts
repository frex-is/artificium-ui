import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;

export const HiddenToggle = styled.input.attrs({ type: "checkbox" })`
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

export const StyledToggle = styled.div<{
  gradient: string;
  borderColor: string;
  backgroundColor: string;
  selected: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  transition: all 1s;
  width: 48px;
  height: 24px;
  ${({ selected, backgroundColor, gradient }) =>
    selected
      ? `background: linear-gradient(to bottom left, ${gradient});`
      : `background: ${backgroundColor};`}
  border-radius: 24px;
  transition: all 150ms;
  outline: 1px solid ${({ borderColor }) => borderColor};

  &:hover {
    outline: 2px solid ${({ selected, borderColor }) => !selected && borderColor};
  }
`;

export const Circle = styled.div<{
  selected: boolean;
  color: string;
  selectedColor: string;
}>`
  position: absolute;
  left: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${({ selected, color, selectedColor }) => (selected ? selectedColor : color)};
  transition: all 150ms;
  transform: ${({ selected }) => (selected ? "translateX(24px)" : "translateX(0)")};
`;
