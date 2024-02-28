import styled from "styled-components";

export const BadgesContainer = styled.div<{
  backgroundColor: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BadgeList = styled.div<{
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
`;

export const TagWithIconContainer = styled.div`
  display: flex;
  gap: 16px;
`;
