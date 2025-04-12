import React from "react";
import { Box, List, Stack, Typography } from "@mui/material";
import { peopleToFollow } from "../../constants/peopleToFollow";
import LikeItem from "./LikeItem";
import TrendsSection from "./TrendsSection";
import ShowMoreLink from "../ShowMoreLink/ShowMoreLink";
import FooterLinks from "../FooterLinks/FooterLinks";
import { SearchBar } from "../SearchBar/SearchBar";

export default function Suggestions() {
  return (
    <Stack flexDirection="column" p={2} height="100%">
      <SearchBar />
      <Box sx={{ background: "#2b2929" }} mt={3} borderRadius={3}>
        <Typography variant="h6" fontWeight="bold" p={2}>
          You might like
        </Typography>
        <List>
          {peopleToFollow.map((item) => (
            <LikeItem key={item} item={item} />
          ))}
        </List>
        <Box p={2}>
          <ShowMoreLink />
        </Box>
      </Box>
      <TrendsSection />
      <FooterLinks />
    </Stack>
  );
}
