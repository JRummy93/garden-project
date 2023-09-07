import "@/styles/global.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3bda73",
      light: "#62E18F",
      dark: "#299850",
    },
    secondary: {
      main: "#B8F5D1",
      light: "#C6F7DA",
      dark: "#80AB92",
    },
    background: {
      default: "#E6F3EE",
    },
    error: {
      main: "#ff3d00",
      light: "#ff6333",
      dark: "#b22a00",
    },
    warning: {
      main: "#a28622",
      light: "#ceab69",
      dark: "#705f1d",
    },
    success: {
      main: '#43a047',
      light: '#70bd73',
      dark: '#215a23',
    },
    info: {
      main: '#7bd5dc',
      light: '#a4ecd9',
      dark: '#5399a2',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    h1: {
      fontSize: '6rem',
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
