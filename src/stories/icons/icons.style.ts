import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  gap: 48px;
`;

export const IconContainer = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;
