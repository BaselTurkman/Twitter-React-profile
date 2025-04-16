import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { footerLinks } from "../../constants/footerLinks";

function FooterLinks() {
  return (
    <Box pl={3} my={2}>
      <Typography
        variant="caption"
        color="text.secondary"
        display="flex"
        flexWrap="wrap"
        gap={1}
        my={2}
      >
        {footerLinks.map((link) => (
          <Link
            key={link}
            href="#"
            underline="hover"
            variant="caption"
            color="textSecondary"
          >
            {link}
          </Link>
        ))}
      </Typography>
    </Box>
  );
}

export default FooterLinks;
