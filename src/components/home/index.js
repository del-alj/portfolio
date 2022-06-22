import * as React from "react";
import { Box, Paper, Grid, styled } from "@mui/material";
import { home } from "./paragraph";
import { Title } from "./style";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "20px",
  hover: {
    background: "red",
  }
}));

export const Home = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <div 
      // style={{ border: "1px solid black" }}
      >
        ok
        <Grid style={{ justifyContent: "center"  }} container spacing={15}>
          <Grid style={{  minHeight:"400px" }} item xs={10} md={5}>
            {/* <Box sx={{ backgroundColor: "blue", height: "100px" }}> */}
            <Title size="3em">{home.BigTitle}</Title>
            <Title size="1em">{home.text}</Title>
            {/* </Box> */}
          </Grid>
          <Grid item xs={10} md={5}>
            <Item  style={{  minHeight:"400px" }}>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={10} md={10}>
            <Item style={{
            background: "rgb(125,196,233)",
            background: "linear-gradient(180deg, rgba(125,196,233,1) 0%, rgba(255,159,58,0.9220063025210083) 100%)"
, minHeight:"1000px" }}>
              <div>xs=6 md=4</div>
            </Item>
          </Grid>
          <Grid item xs={10} md={10}>
            <Item style={{background: "rgb(125,196,233)",
background: "linear-gradient(163deg, rgba(125,196,233,1) 0%, rgba(255,159,58,0.9220063025210083) 100%)", 
minHeight:"1000px" }}>xs=6 md=8</Item>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};
