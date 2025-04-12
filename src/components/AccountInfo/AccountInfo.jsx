import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function AccountInfo({ item }) {
  const { name, logo, nameVariant = "body1", usernameVariant = "body2" } = item;

  return (
    <Box display="flex" alignItems="center" width="100%" justifyContent="space-between">
      <Avatar
        alt={name}
        src={logo}
      />
      <Stack ml={2} flexDirection="column" flex={1}>
        <Typography variant={nameVariant} fontWeight="bold">
          {name}
        </Typography>
        <Typography variant={usernameVariant} color="textSecondary" noWrap>
          @{name}
        </Typography>
      </Stack>
    </Box>
  );
}
