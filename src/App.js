import React from 'react';
import { Box, CssBaseline, Grid } from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './Theme/theme';

import "./App.css"
import Suggestions from './components/Suggestions/Suggestions';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }} position="relative">
          <Grid container>
            <Grid size={{xs: 4, md: 3}} position="sticky" top= {0} height={100} zIndex={1}>
              <Sidebar />
            </Grid>
            <Grid size={{xs: 2, md: 6}} sx={{border: "black solid 1px", borderRadius: 4}}>
              <Feed />
            </Grid>
            <Grid size={{xs: 6, md: 3}} zIndex={1}>
              <Suggestions />
            </Grid>
          </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
