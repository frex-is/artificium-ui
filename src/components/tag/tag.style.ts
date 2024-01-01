import styled from "styled-components";

export const StyledTag = styled.p`
  color: #b6f09c;
  text-align: center;
  font-weight: 100;
  font-family: "jakarta";
`;

export const TagContainer = styled.div`
  align-items: center;
  background: linear-gradient(
    to bottom right,
    rgba(215.22, 236.94, 236.94, 0.07) 0%,
    rgba(204.48, 234.81, 234.81, 0) 100%
  );
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  display: inline-flex;
  height: 32px;
  overflow: hidden;
  padding: 4px 12px;
  position: relative;
`;

export const BottomLeftGlow = styled.div`
  position: absolute;
  background: #b6f09c;
  width: 40px;
  height: 40px;
  bottom: -50px;
  left: -50px;
  border-radius: 50%;
  filter: blur(40px);
`;

export const TopRightGlow = styled.div`
  position: absolute;
  background: #b6f09c;
  width: 10px;
  height: 10px;
  right: 0px;
  top: 0px;
  border-radius: 50%;
  filter: blur(15px);
`;
