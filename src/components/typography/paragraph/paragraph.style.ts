import styled from "styled-components";

export const ParagraphContainer = styled.div<{
  fontSize: string;
  lineHeight: string;
  fontFamily: string;
  textColor: string;
  letterSpacing: string;
  isSpan: boolean;
}>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ textColor }) => textColor};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  display: ${({ isSpan }) => (isSpan ? "inline" : "block")};
`;
