import { useContext } from "react";
import { ArtificiumContext, ArtificiumContextProps } from "../providers/artificium/artificium";
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
 *
 *   // Access the current theme:
 *   const currentTheme = artificiumContext.theme;
 *
 *   // Update the theme:
 *   artificiumContext.setTheme(newTheme);
 *
 *   // ...
 * };
 * ```
 */
export const useArtificium = (): ArtificiumContextProps => {
  const context = useContext(ArtificiumContext);

  if (!context) {
    throw new ArtificiumContextError();
  }

  return context;
};
