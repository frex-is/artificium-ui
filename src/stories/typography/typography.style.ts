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

export const TypographyContainer = styled.div`
  display: flex;
`;

export const HeadingContainer = styled.div`
  padding: 16px 64px;
`;

export const ParagraphContainer = styled.div`
  padding: 16px 64px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 48px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary[600]};
`;

export const SectionTitle = styled.div`
  display: flex;
  gap: 48px;
`;

export const InformationSection = styled.div`
  display: flex;
  gap: 48px;
`;

export const Information = styled.div``;
