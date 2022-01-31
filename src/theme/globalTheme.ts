import { deepPurple, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: deepPurple[300],
      main: deepPurple[400],
      dark: deepPurple[600],
      contrastText: "#fff",
    },
    secondary: {
      light: yellow[50],
      main: yellow[100],
      dark: yellow[200],
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: `Neonderthow, cursive`,
    subtitle1: {
      fontSize: 16,
    },
    h1: {
      fontSize: 40,
      fontWeight: "bold"
    },
    button: {
      fontWeight: "bold"
    }
  },
});
