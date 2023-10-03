<style>
  @import
  url(`https://fonts.googleapis.com/css2?family=Montserrat&display=swap`);
</style>;
import "@/styles/global.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ClerkProvider } from "@clerk/nextjs";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3BB169",
      light: "#62C087",
      dark: "#297B49",
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
      main: "#43a047",
      light: "#70bd73",
      dark: "#215a23",
    },
    info: {
      main: "#7bd5dc",
      light: "#a4ecd9",
      dark: "#5399a2",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 16,
    h1: {
      fontSize: "6rem",
    },
    button: {
      fontFamily: "Montserrat, sans-serif",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#3BB169",
        },
      }}
      {...pageProps}
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ClerkProvider>
  );
}
