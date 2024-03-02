export type ColorShades = {
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

export type Gradient = {
  primary: string;
  secondary: string;
  tertiary: string;
};

export type FontInformation = {
  size: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
  family: {
    bold: string;
    semiBold: string;
    medium: string;
    regular: string;
  };
  lineHeight: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
  letterSpacing: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
};

export type ArtificiumTheme = {
  color: {
    primary: ColorShades & {
      0: string;
    };
    secondary: ColorShades;
    tertiary: ColorShades;
    quaternary: ColorShades;
    quinary: ColorShades;
    senary: ColorShades;
    warn: Pick<ColorShades, 100 | 600 | 900>;
    valid: Pick<ColorShades, 100 | 600 | 900>;
    error: Pick<ColorShades, 100 | 600 | 900>;
  };
  gradient: Gradient;
  font: {
    paragraph: FontInformation;
    heading: FontInformation;
  };
};
