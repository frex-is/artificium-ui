import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  gap: 48px;
`;

export const IconContainer = styled.div<{
  backgroundColor: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;
