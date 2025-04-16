import { Tabs, Tab, Box } from "@mui/material";

const TabsNavigation = () => {
  return (
    <Box borderBottom="1px solid #444">
      <Tabs textColor="inherit" indicatorColor="primary" value={0}>
        <Tab label="Posts" />
        <Tab label="Replies" />
        <Tab label="Media" />
        <Tab label="Likes" />
      </Tabs>
    </Box>
  );
};

export default TabsNavigation;
