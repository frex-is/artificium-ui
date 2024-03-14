import React, { useState } from "react";

export const useCheckBox = () => {
  const [selected, setSelected] = useState(false);

  return { selected, setSelected };
};
