import { Container, styled } from "@mui/material";

export const ContainerDiv = styled(Container)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(20)
}));
