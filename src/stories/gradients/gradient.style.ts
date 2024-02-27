import styled from "styled-components";

export const Gradient = styled.div`
  background: linear-gradient(${({ theme }) => theme.direction}, ${({ theme }) => theme.gradient});
  width: 552px;
  height: 72px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "jakarta";
  color: ${({ color }) => color};
`;

export const GradientsContainer = styled.div`
  padding: 64px;
  background-color: ${({ theme }) => theme.color.primary[800]};
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
