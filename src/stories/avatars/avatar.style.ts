import styled from "styled-components";

export const ContentContainer = styled.div<{
  backgroundColor: string;
}>`
  padding: 64px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const AvatarsContainer = styled.div<{
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
  flex-flow: wrap;
  // 8 * profile width + 9 * gap + 2 * border width
  width: calc(8 * 48px + 9 * 16px + 4px);
`;

export const StatusContainer = styled.div<{
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

export const ExtraContainer = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;
