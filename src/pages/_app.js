import "@/styles/global.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
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

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
