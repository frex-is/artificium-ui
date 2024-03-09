import styled from "styled-components";

export const AlertContainer = styled.div<{
  backgroundColor: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 32px;
`;

export const AutoCloseAlertsContainer = styled.div<{
  backgroundColor: string;
  borderColor: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 5px;
  border: 2px dashed ${({ borderColor }) => borderColor};
`;
