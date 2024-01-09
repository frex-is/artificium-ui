export interface ArtificiumTheme {
  color: {
    primary: {
      0: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    secondary: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    tertiary: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    quaternary: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    quinary: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    warn: {
      100: string;
      600: string;
      900: string;
    };
    valid: {
      100: string;
      600: string;
      900: string;
    };
    error: {
      100: string;
      600: string;
      900: string;
    };
  };
  font?: {
    primary: string;
  };
}

export const darkTheme: ArtificiumTheme = {
  color: {
    primary: {
      0: "#FFFFFF",
      100: "#E8E9E9",
      200: "#CDCECF",
      300: "#9B9C9E",
      400: "#686B6E",
      500: "#363A3D",
      600: "#1A1D21",
      700: "#131619",
      800: "#0D0F10",
      900: "#060708",
    },
    secondary: {
      100: "#EBEDFC",
      200: "#D2D8F9",
      300: "#A6B0F2",
      400: "#7989EC",
      500: "#4D62E5",
      600: "#3045C9",
      700: "#243497",
      800: "#182364",
      900: "#0C1132",
    },
    tertiary: {
      100: "#F0E8FD",
      200: "#DECCFB",
      300: "#BD9AF8",
      400: "#9C67F4",
      500: "#7C35F1",
      600: "#5F18D4",
      700: "#47129F",
      800: "#300C6A",
      900: "#180635",
    },
    quaternary: {
      100: "#FFFAEA",
      200: "#FFF3D1",
      300: "#FFE8A3",
      400: "#FFDC75",
      500: "#FFD147",
      600: "#E2B42B",
      700: "#AA8720",
      800: "#715A15",
      900: "#392D0B",
    },
    quinary: {
      100: "#",
      200: "#",
      300: "#",
      400: "#",
      500: "#",
      600: "#",
      700: "#",
      800: "#",
      900: "#",
    },
    warn: {
      100: "#FFF2E9",
      600: "#E26F20",
      900: "#391C08",
    },
    valid: {
      100: "#F3FBF7",
      600: "#4AC97E",
      900: "#122B1D",
    },
    error: {
      100: "#FBECEC",
      600: "#D0302F",
      900: "#2F0F0E",
    },
  },
};
