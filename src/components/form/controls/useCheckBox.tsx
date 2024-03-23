import React, { useState } from "react";

export interface useCheckBoxProps {
  isSelected: boolean;
}

export const useCheckBox = ({ isSelected }: useCheckBoxProps) => {
  const [selected, setSelected] = useState(isSelected);

  return { selected, setSelected };
};
