import { Avatar, Stack } from "@mui/material";
import React from "react";
import { StyledListItemIcon } from "../Sidebar/styled/Sidebar.styled";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ProfilePhoto from "../../assets/profile-photo.png";
import { FollowButton } from "../FollowButton/FollowButton";

function ProfileImage() {
  return (
    <Stack
      flexDirection={{ sm: "column", md: "row" }}
      justifyContent="space-between"
      px={2}
      mt={-8}
      mb={2}
    >
      <Avatar
        alt="React"
        src={ProfilePhoto}
        sx={{
          width: 150,
          height: 150,
          border: "4px solid black",
          position: "relative",
          top: "-50px",
        }}
      />
      <Stack
        flexDirection={{ sm: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        mt={{sm: 2, md: 6}}
        spacing={2}
      >
        <Stack
          p={2}
          m={2}
          alignContent="space-around"
          alignItems="center"
          flexDirection={{ sm: "column", md: "row" }}
        >
          <StyledListItemIcon>
            <NotificationAddIcon />
          </StyledListItemIcon>
          <StyledListItemIcon>
            <MoreHorizIcon />
          </StyledListItemIcon>
          <FollowButton>Follow</FollowButton>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ProfileImage;
