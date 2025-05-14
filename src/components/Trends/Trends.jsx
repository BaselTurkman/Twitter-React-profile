import { Box, Stack } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import { PostsText, TrendName, TrendWrapper, TypeText } from "./style/Trends.style";

export const Trend = ({ name, type, posts, isArabic }) => {
  return (
    <TrendWrapper isarabic={isArabic ? 1 : 0}>
      <Box>
        {type && <TypeText>{type}</TypeText>}
        <TrendName isarabic={isArabic ? 1 : 0}>{name}</TrendName>
        {posts && <PostsText>{posts}</PostsText>}
      </Box>

      {!isArabic && (
        <Stack alignItems="start">
          <MoreHorizIcon fontSize="small" sx={{ color: "#666" }} />
        </Stack>
      )}
    </TrendWrapper>
  );
};

export default Trend;
