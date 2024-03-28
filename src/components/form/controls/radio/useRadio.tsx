import React, { useState } from "react";

export interface useRadioProps {
  isSelected: boolean;
}

export const useRadio = ({ isSelected }: useRadioProps) => {
  const [selected, setSelected] = useState(isSelected);

  return { selected, setSelected };
};
