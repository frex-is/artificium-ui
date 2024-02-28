import styled from "styled-components";

export const SubHeader = styled.div`
  padding: 64px;
  background-color: ${({ theme }) => theme.color.primary[700]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FontNameContainer = styled.div`
  color: ${({ theme }) => theme.color.primary[0]};
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const IconTypography = styled.div`
  font-size: 118px;
  font-family: "jakarta";
  background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(${({ theme }) => theme.gradient.secondary});
`;

export const TypographyContainer = styled.div<{
  backgroundColor: string;
}>`
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const HeadingContainer = styled.div<{
  borderColor: string;
}>`
  padding: 16px 64px;
  border-right: 1px solid ${({ borderColor }) => borderColor};
`;

export const ParagraphContainer = styled.div`
  padding: 16px 64px;
`;

export const Section = styled.div<{
  borderColor: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 48px 0;
  border-bottom: 1px solid ${({ borderColor }) => borderColor};
`;

export const SectionTitle = styled.div`
  display: flex;
  gap: 48px;
`;

export const InformationSection = styled.div`
  display: flex;
  gap: 48px;
`;

export const InformationContainer = styled.div``;

export const FontTypeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Circle = styled.div<{
  color: string;
}>`
  width: 4px;
  height: 4px;
  background-color: ${({ color }) => color};
  border-radius: 100%;
`;
