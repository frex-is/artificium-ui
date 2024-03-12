import styled from "styled-components";

export const NavigationItemContainer = styled.div<{
  isActive: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 14px;
  border-radius: 8px;
  border-top: ${({ isActive }) => (isActive ? "1px solid #363A3D" : "none")};
  box-shadow: ${({ isActive }) =>
    isActive
      ? "0px 1px 3px #0806060D, 0px 1px 2px #0806060D, 0px 2px 12px #1A1D21A3 inset"
      : "none"};
  cursor: pointer;
`;

export const NavigationInformationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
