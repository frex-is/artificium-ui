import { useContext } from "react";
import { ArtificiumContext } from "../providers/artificium/artificium";

export const useArtificium = () => {
  const context = useContext(ArtificiumContext);

  if(!context) {
    throw new ArtificiumContextError();
  }

  return context
}