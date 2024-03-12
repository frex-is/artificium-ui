import styled from "styled-components";

export const NavigationContainer = styled.div<{
  backgroundColor: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 32px;
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const NavigationItemsContainer = styled.div<{
  backgroundColor: string;
  borderColor: string;
}>`
  position: relative;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 2px dashed ${({ borderColor }) => borderColor};
  padding: 16px;
  border-radius: 5px;
`;

export const NavigationTabsContainer = styled.div<{
  backgroundColor: string;
  borderColor: string;
}>`
  position: relative;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 2px dashed ${({ borderColor }) => borderColor};
  padding: 0 16px;
  border-radius: 5px;
  width: fit-content;
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 16px;
`;
