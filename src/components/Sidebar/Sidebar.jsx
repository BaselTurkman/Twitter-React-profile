import React from "react";
import { Box, List, Link } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import { sidebarItems } from "../../constants/sidebarItems";
import { StyledListItemIcon } from "./styled/Sidebar.styled";
import SidebarItem from "./SidebarItem";
import PostButton from "./PostButton";
import ProfileSection from "./ProfileSection";

export default function Sidebar() {
  return (
    <Box p={2} display="flex" flexDirection="column" height="100vh">
      <Box>
        <Link href="#">
          <StyledListItemIcon>
            <XIcon />
          </StyledListItemIcon>
        </Link>
        <List disablePadding>
          {sidebarItems.map((item) => (
            <SidebarItem key={item.name} item={item} />
          ))}
        </List>
        <PostButton />
      </Box>
      <ProfileSection />
    </Box>
  );
}
