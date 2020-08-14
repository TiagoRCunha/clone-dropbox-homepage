import { createMuiTheme } from '@material-ui/core/styles'

// it is necessary to declare module when use custom global variables
declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    tertiary: { main: string };
    quaternary: { main: string };
    blue: { main: string };
    border: { main: string };
  }

  interface PaletteOptions {
    tertiary: { main: string };
    quaternary: { main: string };
    blue: { main: string };
    border: { main: string };
  }
}

const theme = createMuiTheme({
  palette: {
    primary: { main: "#0d2f81" },
    secondary: { main: "#ffe7aa" },
    tertiary: { main: "#fff" },
    quaternary: { main: "#000" },
    blue: { main: "#0061ff" },
    border: { main: "#bdc4c9" },
  },
  typography: {
    fontWeightRegular: 500,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          margin: 0,
          padding: 0,
        },
        "*, button, input": {
          fontFamily: "Roboto,   sans-serif",
        },
        "button, input": {
          // material-ui doesnt apply typography to normal html tags
          fontWeight: "500",
        },
      },
    },
  },
});

export default theme;
