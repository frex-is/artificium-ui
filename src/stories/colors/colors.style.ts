import styled from "styled-components";

export const ColorContainer = styled.div<{
  backgroundColor: string;
  borderColor: string;
}>`
  padding: 64px;
  display: flex;
  gap: 64px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
`;

export const ColorName = styled.div<{
  color: string;
}>`
  color: ${({ color }) => color};
  width: 164px;
  font-size: 28px;
  font-family: "jakarta";
`;

export const ColorGridContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 24px;
  width: calc(3 * 168px + 3 * 24px);
`;

export const Color = styled.div<{
  color: string;
  textColor: string;
  borderColor: string;
}>`
  background-color: ${({ color }) => color};
  width: 168px;
  height: 72px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  font-family: "jakarta";
  border: 1px solid ${({ borderColor }) => borderColor};
`;
