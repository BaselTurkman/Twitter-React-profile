import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
      background: {
        default: "#121212", // Dark background color for the app
      },
      text: {
        primary: "#ffffff", // White text color for primary text
        secondary: "#b0b0b0", // Lighter text color for secondary text
      },
    },
    components: {
      // Customize Paper component default styles
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "#121212", // Default background color for Paper components
            color: "#ffffff", // Default text color for Paper components
          },
        },
      },
    },
  });