import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  gap: 48px;
`;

export const IconContainer = styled.div`
  background-color: #0d0f10;
  padding: 48px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const HeaderContainer = styled.div`
  padding: 64px;
  background: linear-gradient(to top right, ${(theme) => theme.theme.gradient.quinary});
  border-radius: 24px 24px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StoryContainer = styled.div`
  width: fit-content;
`;

export const PageTitle = styled.p`
  font-family: "jakarta";
  font-size: 40px;
  margin: 0;
`;