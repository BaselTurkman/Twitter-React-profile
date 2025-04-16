import { Stack } from "@mui/material";
import Trend from "../Trends/Trends";
import { trends } from "../../constants/trends";
import BoxContainer from "./BoxContainer/BoxContainer";

export default function TrendsSection() {
  return (
    <BoxContainer title="Trends for you">
      <Stack flexDirection="column" mt={2} gap={2} p={2}>
        {trends.map((trend) => (
          <Trend
            key={trend.name}
            name={trend.name}
            posts={trend?.posts}
            type={trend?.type}
            isArabic={trend.isArabic}
          />
        ))}
      </Stack>
    </BoxContainer>
  );
}
