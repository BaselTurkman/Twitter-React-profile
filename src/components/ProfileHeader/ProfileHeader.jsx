import { Box } from "@mui/material";
import React from "react";
import ProfileCover from "../../assets/profile-cover.jpeg";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import TabsNavigation from "./TabsNavigation";

const ProfileHeader = () => {
  return (
    <Box borderBottom="1px solid #333">
      <Box
        component="img"
        src={ProfileCover}
        alt="React Banner"
        width="100%"
        height={200}
        sx={{
          objectFit: "cover",
          objectPosition: "left",
          borderRadius: "0 0 8px 8px",
        }}
      />
      <ProfileImage />
      <ProfileInfo />
      <TabsNavigation />
    </Box>
  );
};

export default ProfileHeader;
