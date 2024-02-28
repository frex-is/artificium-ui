import styled from "styled-components";

export const ParagraphContainer = styled.div<{
  fontSize: string;
  lineHeight: string;
  fontFamily: string;
  textColor: string;
  letterSpacing: string;
}>`
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ textColor }) => textColor};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
`;
