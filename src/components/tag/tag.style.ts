import styled from "styled-components";

export const StyledTag = styled.p<{
  color: string;
  fontFamily: string;
}>`
  color: ${({ color }) => color};
  text-align: center;
  font-weight: 100;
  font-family: ${({ fontFamily }) => fontFamily};
`;

export const TagContainer = styled.div`
  align-items: center;
  background: linear-gradient(to bottom right, #d7eded06 0%, #ccebeb22 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  display: inline-flex;
  height: 32px;
  overflow: hidden;
  padding: 4px 12px;
  position: relative;
  width: fit-content;
  gap: 8px;
`;

export const BottomLeftGlow = styled.div<{
  color: string;
}>`
  position: absolute;
  background: ${({ color }) => color};
  width: 40px;
  height: 40px;
  bottom: -25px;
  left: -25px;
  border-radius: 50%;
  filter: blur(16px);
  opacity: 0.3;
`;

export const TopRightGlow = styled.div<{
  color: string;
}>`
  position: absolute;
  background: ${({ color }) => color};
  width: 22px;
  height: 22px;
  right: -11px;
  top: -11px;
  border-radius: 50%;
  filter: blur(16px);
  opacity: 0.3;
`;
