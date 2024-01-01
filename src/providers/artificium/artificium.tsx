import React, { createContext, FC as FunctionalComponent, ReactNode, useState } from "react";
import { ArtificiumTheme, darkTheme } from "../../theme/theme";
import { GlobalStyle } from "../../global.style";

interface ArtificiumProviderProps {
  children: ReactNode;
}

export interface IArtificiumContext {
  theme: ArtificiumTheme;
  setTheme: (theme: ArtificiumTheme) => void;
}

export const ArtificiumContext = createContext<IArtificiumContext>({
  theme: darkTheme,
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
  const [theme, setTheme] = useState(darkTheme);

  return (
    <ArtificiumContext.Provider value={{ theme, setTheme }}>
      <GlobalStyle />
      {children}
    </ArtificiumContext.Provider>
  );
};
