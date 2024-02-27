import styled from "styled-components";

export const SubHeader = styled.div`
  padding: 64px;
  background-color: ${({ theme }) => theme.color.primary[700]};
  display: flex;
  justify-content: sapce-between;
  align-items: center;
`;

export const FontNameContainer = styled.div`
  color: ${({ theme }) => theme.color.primary[0]};
`;

export const IconTypography = styled.div`
  font-size: 118px;
  font-family: "jakarta";
  background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(${({ theme }) => theme.gradient.secondary});
`;
