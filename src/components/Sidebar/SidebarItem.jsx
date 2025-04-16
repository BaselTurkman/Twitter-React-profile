import React from "react";
import { StyledListItem, StyledListItemIcon } from "./styled/Sidebar.styled";
import { ListItemText } from "@mui/material";

export default function SidebarItem({item}) {
  return (
    <StyledListItem>
      <StyledListItemIcon>{item.icon}</StyledListItemIcon>
      <ListItemText primary={item.name} />
    </StyledListItem>
  );
}
