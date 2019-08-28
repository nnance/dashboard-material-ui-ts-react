import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
    },
    error: {
      main: red.A400,
    },
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
  },
});

export default theme;
