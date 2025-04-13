import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#121212",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  components: {

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#121212",
          color: "#ffffff",
        },
      },
    },
  },
});