import styled from "styled-components";

export const ColorContainer = styled.div`
  padding: 64px;
  display: flex;
  gap: 64px;
  background-color: ${({ theme }) => theme.color.primary[800]};
`;

export const ColorName = styled.div`
  color: ${({ theme }) => theme.color.primary[0]};
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

export const Color = styled.div`
  background-color: ${({ color }) => color};
  width: 168px;
  height: 72px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.textColor};
  font-family: "jakarta";
`;