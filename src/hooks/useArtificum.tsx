import { useContext } from "react";
import { ArtificiumContext } from "../providers/artificium/artificium";
import { ArtificiumContextError } from "../errors/artificiumContextError";

/**
 * Custom hook for accessing the Artificium context.
 *
 * @throws {ArtificiumContextError} Throws an error if the Artificium context is not available.
 *
 * @returns {ArtificiumContext} The Artificium context.
 *
 * @example
 * ```jsx
 * const MyComponent = () => {
 *   const artificiumContext = useArtificium();
 *   // Use artificiumContext here...
 * };
 * ```
 */
export const useArtificium = () => {
  const context = useContext(ArtificiumContext);

  if (!context) {
    throw new ArtificiumContextError();
  }

  return context;
};
