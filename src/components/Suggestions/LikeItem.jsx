import React from "react";
import { ListItem } from "@mui/material";
import { FollowButton } from "../FollowButton/FollowButton";
import AccountInfo from "../AccountInfo/AccountInfo";

export default function LikeItem({ item }) {
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",  
        alignItems: "center",
        padding: 2,  
        flexDirection: { xs: "column", sm: "row" }, 
      }}
    >
      <AccountInfo item={item} />
      <FollowButton variant="text" size="small">
        Follow
      </FollowButton>
    </ListItem>
  );
}
