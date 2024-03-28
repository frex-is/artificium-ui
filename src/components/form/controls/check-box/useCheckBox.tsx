import React, { useState } from "react";

export interface useCheckBoxProps {
  isSelected: boolean;
  onClick?: () => void;
}

export const useCheckBox = ({ isSelected, onClick }: useCheckBoxProps) => {
  const [selected, setSelected] = useState(isSelected);

  const onSelectCheckBox = () => {
    setSelected(!selected);
    onClick && onClick();
  };

  return { selected, onSelectCheckBox };
};
