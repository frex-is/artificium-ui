import React from "react";

export interface useToggleProps {
  isSelected: boolean;
}

export const useToggle = ({ isSelected }: useToggleProps) => {
  const [selected, setSelected] = React.useState(isSelected);

  return { selected, setSelected };
};
