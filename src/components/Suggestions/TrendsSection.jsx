import { Box, Stack, Typography } from "@mui/material";
import Trend from "../Trends/Trends";
import { trends } from "../../constants/trends";
import ShowMore from "../ShowMoreLink/ShowMoreLink";
export default function TrendsSection() {
  return (
    <Box
      borderRadius={3}
      px={3}
      py={2}
      mt={3}
      sx={{
        backgroundColor: "#2b2929",
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Trends for you
      </Typography>

      <Stack flexDirection="column" mt={2} gap={2}>
        {trends.map((trend) => (
          <Trend
            key={trend.name}
            name={trend.name}
            posts={trend?.posts}
            type={trend?.type}
            isArabic={trend.isArabic}
          />
        ))}
        <ShowMore />
      </Stack>
    </Box>
  );
}
