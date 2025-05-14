import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { postCards } from "../../constants/postCards";
import AccountInfo from "../AccountInfo/AccountInfo";
import { FollowButton } from "../FollowButton/FollowButton";
import ShowMoreLink from "../ShowMoreLink/ShowMoreLink";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

export default function WhoToFollow() {
  return (
    <Box p={1}>
      {postCards.map((trend, index) => (
        <Stack
          key={index}
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          mb={2}
        >
          <Stack direction="column" justifyContent="center" my={2}>
            <Stack mb={1} flexDirection={{ sm: "column", md: "row" }}>
              <PermIdentityIcon />
              <Typography color="textSecondary" variant="body2" ml={1}>
                {trend?.follow}
              </Typography>
            </Stack>
            <AccountInfo item={trend} />
            <Typography variant="body2" color="textPrimary" my={1}>
              {trend.description} {trend?.tweetBy && "Tweets by"}
            </Typography>
            <Typography variant="body2" color="primary" fontWeight="bold">
              {trend?.tweetBy}
            </Typography>
          </Stack>
          <FollowButton>Follow</FollowButton>
        </Stack>
      ))}
      <ShowMoreLink />
    </Box>
  );
}
