import { Button } from "@mui/material";
import React from "react";

export default function PostButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      sx={{ marginTop: 2, borderRadius: 4 }}
    >
      Post
    </Button>
  );
}
