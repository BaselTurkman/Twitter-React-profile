import { Grid, Stack } from "@mui/material";
import React from "react";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; 
import BarChartIcon from '@mui/icons-material/BarChart'
import FileUploadIcon from "@mui/icons-material/FileUpload";

function Icons() {
  return (
    <Grid container spacing={12} my={3}>
      <Grid ml={5} size={{ sm: 2 }}>
        <Stack flexDirection="row">
          <ChatBubbleOutlineIcon /> 46
        </Stack>
      </Grid>
      <Grid size={{ sm: 2 }}>
        <Stack flexDirection="row">
          <RepeatIcon /> 675
        </Stack>
      </Grid>
      <Grid size={{ sm: 2 }}>
        <Stack flexDirection="row">
          <FavoriteBorderIcon /> 3301
        </Stack>
      </Grid>
      <Grid size={{ sm: 2 }}>
        <Stack flexDirection="row">
          <BarChartIcon /> 1.1M
        </Stack>
      </Grid>
      <Grid size={{ sm: 3 }}>
        <FileUploadIcon />
      </Grid>
    </Grid>
  );
}

export default Icons;
