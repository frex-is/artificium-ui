import styled from "styled-components";

export const ParagraphContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSize};
  line-height: ${({ theme }) => theme.lineHeight};
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.textColor};
  letter-spacing: ${({ theme }) => theme.letterSpacing};
`;
