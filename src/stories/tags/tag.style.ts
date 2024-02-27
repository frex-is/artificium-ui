import styled from "styled-components";

export const BadgesContainer = styled.div`
  background-color: ${({ theme }) => theme.color.primary[800]};
  padding: 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BadgeList = styled.div`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.primary[700]};
  border: 2px dashed ${({ theme }) => theme.color.primary[500]};
  padding: 16px;
  border-radius: 5px;
  display: flex;
  gap: 16px;
`;

export const TagWithIconContainer = styled.div`
  display: flex;
  gap: 16px;
`;
