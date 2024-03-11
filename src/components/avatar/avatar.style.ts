import styled from "styled-components";

export const ProfileContainer = styled.img<{
  size: string;
}>`
  border-radius: 20px;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

export const AvatarContainer = styled.div`
  position: relative;
  width: fit-content;
`;

export const StatusContainer = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
`;
