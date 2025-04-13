import React from "react";
import { List, Stack } from "@mui/material";
import { peopleToFollow } from "../../constants/peopleToFollow";
import LikeItem from "./LikeItem";
import TrendsSection from "./TrendsSection";
import FooterLinks from "../FooterLinks/FooterLinks";
import { SearchBar } from "../SearchBar/SearchBar";
import BoxContainer from "./BoxContainer/BoxContainer";

export default function Suggestions() {
  return (
    <Stack flexDirection="column" p={2} height="100%">
      <SearchBar />
      <BoxContainer title="You might Like">
        <List>
          {peopleToFollow.map((item) => (
            <LikeItem key={item} item={item} />
          ))}
        </List>
      </BoxContainer>
      <TrendsSection />
      <FooterLinks />
    </Stack>
  );
}
