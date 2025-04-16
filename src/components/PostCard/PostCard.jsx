import { Box, Stack, Typography } from "@mui/material";
import AccountInfo from "../AccountInfo/AccountInfo";
import User from "../../assets/User-1.jpg";
import RepeatIcon from "@mui/icons-material/Repeat";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Icons from "./Icons";

const PostCard = () => {
  return (
    <Box p={2} borderBottom="1px solid #222">
      <Stack flexDirection={{sm: "column", md: "row"}} alignItems="center" gap={2}>
        <Typography
          variant="caption"
          display="flex"
          alignItems="center"
          gap={1}
        >
          <RepeatIcon  />
          react.dev
        </Typography>
      </Stack>

      <Stack flexDirection={{sm: "column", md: "row"}} alignItems="center" mt={1} p={1} justifyContent="space-between">
        <AccountInfo
          item={{
            name: "danabramov.bskysocial",
            logo: User,
            nameVariant: "caption",
            usernameVariant: "caption",
          }}
        />
        <Box>
          <MoreHorizIcon/>
        </Box>
      </Stack>

      <Typography variant="caption" mt={1} p={1} fontWeight="bold">
        happy 10th birthday to @reactjs 🎂
      </Typography>
      <Icons/>
    </Box>
  );
};

export default PostCard;
