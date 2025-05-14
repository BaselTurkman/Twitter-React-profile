import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UserOne from "../../assets/User-1.jpg";
import ProfilePhoto from "../../assets/profile-photo.png";

function ProfileInfo() {
  return (
    <Box px={4}>
      <Typography variant="h6" fontWeight="bold">
        React
      </Typography>
      <Typography variant="body2" color="text.secondary">
        @reactjs
      </Typography>
      <Typography variant="body2" mt={1}>
        The library for web and native user interfaces
      </Typography>
      <Box display="flex" alignItems="center" gap={2}>
        <Typography
          variant="caption"
          display="flex"
          alignItems="center"
          gap={0.5}
        >
          <LinkIcon />
          react.dev
        </Typography>
        <Typography
          variant="caption"
          display="flex"
          alignItems="center"
          gap={0.5}
          color="text.secondary"
        >
          <CalendarMonthIcon />
          Joined July 2013
        </Typography>
      </Box>
      <Typography variant="body2" mt={1}>
        <Typography variant="body2" component="span" fontWeight="bold">
          267
        </Typography>
        Following
        <Typography variant="body2" component="span" fontWeight="bold">
          708.1K
        </Typography>
        Followers
      </Typography>
      <Stack flexDirection={{sm: "column", md: "row"}} alignItems="center" gap={1}>
        <Stack flexDirection={{sm: "column", md: "row"}} alignItems="center" width={40}>
          <Avatar
            alt="user image 1"
            src={UserOne}
            sx={{ width: 16, height: 16, zIndex: 20 }}
          />
          <Avatar
            alt="user image 2"
            src={ProfilePhoto}
            sx={{
              width: 16,
              height: 16,
              transform: "translateX(-8px)",
              zIndex: 10,
            }}
          />
          <Avatar
            alt="user image 3"
            src={ProfilePhoto}
            sx={{
              width: 16,
              height: 16,
              transform: "translateX(-18px)",
            }}
          />
        </Stack>
        <Typography
          fontSize="0.8rem"
          color="rgba(102, 102, 102, 1)"
          variant="subtitle2"
        >
          Followed by Mohammad Kukhun, Yazen Alsade 💫 and 14 others you follow
        </Typography>
      </Stack>
    </Box>
  );
}

export default ProfileInfo;
