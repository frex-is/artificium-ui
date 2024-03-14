import styled from "styled-components";

export const IconContainer = styled.div<{
  backgroundColor: string;
}>`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
