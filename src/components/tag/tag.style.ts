import styled from "styled-components";

export const StyledTag = styled.p`
  color: ${({ color }) => color};
  text-align: center;
  font-weight: 100;
  font-family: "jakarta";
`;

export const TagContainer = styled.div`
  align-items: center;
  background: linear-gradient(
    to bottom right,
    #D7EDED06 0%,
    #CCEBEB22 100%
  );
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

export const BottomLeftGlow = styled.div`
  position: absolute;
  background: ${({ color }) => color};
  width: 40px;
  height: 40px;
  bottom: -25px;
  left: -25px;
  border-radius: 50%;
  filter: blur(16px);
`;

export const TopRightGlow = styled.div`
  position: absolute;
  background: ${({ color }) => color};
  width: 22px;
  height: 22px;
  right: -11px;
  top: -11px;
  border-radius: 50%;
  filter: blur(16px);
`;
