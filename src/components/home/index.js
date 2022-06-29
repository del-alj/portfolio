import * as React from "react";
import { Box, Paper, Grid, styled } from "@mui/material";
import { home } from "./paragraph";
import { Title, Card } from "./style";
import { backgrounds } from "./backgroundColors.js";
import tetris from "../../assets/redtetris.png";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "20px",
  "&:hover": {
    boxShadow:
      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
  }
}));
const projects = home.projects;
export const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div
      // style={{ border: "1px solid black" }}
      >
        <Grid style={{ justifyContent: "center" }} container spacing={15}>
         
         
        </Grid>
      </div>
    </Box>
  );
};
