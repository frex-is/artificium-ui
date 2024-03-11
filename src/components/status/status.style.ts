import styled from "styled-components";

export const Circle = styled.div<{
  color: string;
}>`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  filter: drop-shadow(0px 0px 15px ${({ color }) => color});
`;

export const MoonContainer = styled.div<{
  backgroundColor: string;
}>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const StatusContainer = styled.div<{
  borderColor: string;
}>`
  border-radius: 50%;
  padding: 4px;
  background-color: ${({ borderColor }) => borderColor};
`;

export const SmallCircle = styled.div<{
  color: string;
}>`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  width: 4px;
  height: 4px;
  position: absolute;
  top: 3px;
  left: 3px;
`;
