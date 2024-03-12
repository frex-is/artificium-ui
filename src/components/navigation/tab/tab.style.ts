import styled from "styled-components";

export const TabContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 8px;
  width: fit-content;
  height: 80px;
  cursor: pointer;
`;

export const Indicator = styled.div<{
  color: string;
}>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 105%;
  height: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: ${({ color }) => color};
  transform: translateX(-2.5%);
`;
