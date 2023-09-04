import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

const theme = ThemeOptions({
  palette: {
    type: "light",
    primary: {
      main: "#4ed866",
    },
    secondary: {
      main: "#baf2bb",
    },
    background: {
      default: "#e8f2f1",
    },
    error: {
      main: "#ff5722",
    },
    warning: {
      main: "#a28622",
    },
  },
});

export default theme;
