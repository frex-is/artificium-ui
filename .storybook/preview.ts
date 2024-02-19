import type { Preview } from "@storybook/react";
import { darkTheme } from '../src/theme/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: darkTheme.color.primary[900],
        }
      ]
    },
  },
};

export default preview;
