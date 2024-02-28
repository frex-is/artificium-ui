import styled from "styled-components";

export const Gradient = styled.div<{
  gradientDirection: string;
  gradient: string;
}>`
  background: linear-gradient(
    ${({ gradientDirection }) => gradientDirection},
    ${({ gradient }) => gradient}
  );
  width: 552px;
  height: 72px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "jakarta";
  color: ${({ color }) => color};
`;

export const GradientsContainer = styled.div<{
  backgroundColor: string;
}>`
  padding: 64px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
