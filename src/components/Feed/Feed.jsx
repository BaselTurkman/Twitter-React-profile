import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Box, Stack, Typography } from "@mui/material";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import PostCard from "../PostCard/PostCard";
import WhoToFollow from "../WhoToFollow/WhoToFollow";

function Feed() {
  return (
    <Stack flexDirection="column" p={2} height="100%">
      <Stack alignItems="self-start" flexDirection="row">
        <KeyboardArrowLeftIcon />
        <Box mx={4}>
          <Typography variant="h6" fontWeight="bold">React</Typography>
          <Typography variant="body2" color="textSecondary" mb={1}>
            2611 Posts
          </Typography>
        </Box>
      </Stack>
      <ProfileHeader />
      <PostCard />
      <Typography variant="h5" fontWeight="bold" p={2}>ًWho to Follow</Typography>
      <WhoToFollow />
    </Stack>
  );
}

export default Feed;
