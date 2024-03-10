import styled from "styled-components";

//   position: fixed;
export const AlertContainer = styled.div<{
  backgroundColor: string;
  isVisible: boolean;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  align-items: center;
  gap: 16px;
  padding: 16px 12px;
  border-radius: 8px;
  width: fit-content;
`;

export const AlertIconContainer = styled.div<{
  color: string;
}>`
  display: flex;
  filter: drop-shadow(0px 5px 15px ${({ color }) => color});
  overflow: hidden;
`;
