import { Box, styled, Typography } from "@mui/material";

export const TrendWrapper = styled(Box)(({ theme, isarabic }) => ({
    display: isarabic ? "block" : "flex",
    justifyContent: isarabic ? "initial" : "space-between",
    alignItems: "center",
}));

export const TypeText = styled("p")(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: "0.65rem",
    margin: 0,
}));

export const TrendName = styled(Typography)(({ isarabic }) => ({
    fontSize: "0.875rem", // ~text-sm
    fontWeight: "bold",
    textAlign: isarabic ? "end" : "start",
}));

export const PostsText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: "0.7rem",
}));