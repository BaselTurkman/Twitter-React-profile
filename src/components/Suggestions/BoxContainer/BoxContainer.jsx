import { Box, Typography } from "@mui/material";
import React from "react";
import ShowMoreLink from "../../ShowMoreLink/ShowMoreLink";

function BoxContainer({ title, children }) {
  return (
    <Box sx={{ background: "#2b2929" }} mt={3} borderRadius={3}>
      <Typography variant="h6" fontWeight="bold" p={2}>
        {title}
      </Typography>
      {children}
      <Box p={2}>
        <ShowMoreLink />
      </Box>
    </Box>
  );
}

export default BoxContainer;
