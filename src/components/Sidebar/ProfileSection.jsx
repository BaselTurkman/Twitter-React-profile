import { Box, IconButton, Paper, Tooltip } from "@mui/material";
import profileImage from "../../assets/profile-image.jpg"; // Import the profile image
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import { StyledListItemIcon } from "./styled/Sidebar.styled";
import AccountInfo from "../AccountInfo/AccountInfo";

export default function ProfileSection() {
  console.log(profileImage);

  return (
    <Box sx={{ marginTop: "auto" }}>
      <Paper>
        <Box display="flex" alignItems="center">
          <AccountInfo item={{ name: "Mohammed", logo: profileImage }} />
          <Tooltip title="Show More">
            <IconButton>
              <StyledListItemIcon>
                <MoreHorizIcon />
              </StyledListItemIcon>
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>
    </Box>
  );
}
