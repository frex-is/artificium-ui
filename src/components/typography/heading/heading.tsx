import React, { ReactNode } from "react";
import { useArtificium } from "../../../hooks/useArtificum";
import { HeadingContainer } from "./heading.style";
import { Size } from "../../../types/size";

export interface HeadingProps {
  size: Size;
  children: ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
  const { theme } = useArtificium();

  return <HeadingContainer theme={theme}>{children}</HeadingContainer>;
};
