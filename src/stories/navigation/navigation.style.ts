import styled from "styled-components";

export const NavigationContainer = styled.div<{
  backgroundColor: string;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 32px;
  width: 350px;
`;

export const NavigationItemContainer = styled.div<{
  backgroundColor: string;
  borderColor: string;
}>`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 2px dashed ${({ borderColor }) => borderColor};
  padding: 16px;
  border-radius: 5px;
`;
