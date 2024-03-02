import React, { createContext, FC as FunctionalComponent, ReactNode, useState } from "react";
import { defaultTheme } from "../../theme/theme";
import { ArtificiumTheme } from "../../types/theme";
import { GlobalStyle } from "../../global.style";

interface ArtificiumProviderProps {
  children: ReactNode;
}

export interface ArtificiumContextProps {
  /**
   * The current Artificum theme object, containing properties like colors, fonts, and other styling information.
   */
  theme: ArtificiumTheme;
  /**
   * A function to update the Artificium theme.
   * Pass a new `ArtificiumTheme` object as an argument to apply the changes.
   */
  setTheme: (theme: ArtificiumTheme) => void;
}

export const ArtificiumContext = createContext<ArtificiumContextProps>({
  theme: defaultTheme,
  setTheme: () => {},
});

/**
 * @component
 * The `ArtificiumProvider` component is a provider that wraps your application with
 * a context for managing the theme of your Artificium component library.
 * It also integrates global styles, including specific fonts, to ensure a
 * consistent visual experience.
 *
 * @props
 * - `children`: The children to be wrapped by the ArtificiumProvider component.
 *
 * @returns {ReactElement} The rendered `ArtificiumProvider` component.
 *
 * @example
 * ```jsx
 * import React from 'react';
 * import { ArtificiumProvider } from 'your-library';
 *
 * const App = () => {
 *   return (
 *     <ArtificiumProvider>
 *       <!-- Your components -->
 *     </ArtificiumProvider>
 *   );
 * };
 * ```
 */
export const ArtificiumProvider: FunctionalComponent<ArtificiumProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ArtificiumContext.Provider value={{ theme, setTheme }}>
      <GlobalStyle />
      {children}
    </ArtificiumContext.Provider>
  );
};
