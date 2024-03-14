import styled from "styled-components";

export const Dashed = styled.div<{
  backgroundColor: string;
  borderColor: string;
}>`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 2px dashed ${({ borderColor }) => borderColor};
  padding: 16px;
  border-radius: 5px;
  display: flex;
  gap: 16px;
  width: fit-content;
`;
