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
}));

export const Home = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
      <div 
      // style={{ border: "1px solid black" }}
      >
        ok
        <Grid container spacing={2}>
          <Grid style={{  minHeight:"400px" }} item xs={6} md={6}>
            {/* <Box sx={{ backgroundColor: "blue", height: "100px" }}> */}
            <Title size="3em">{home.BigTitle}</Title>
            <Title size="1em">{home.text}</Title>
            {/* </Box> */}
          </Grid>
          <Grid item xs={6} md={6}>
            <Item  style={{  minHeight:"400px" }}>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={12}>
            <Item style={{background: "#659999",  
                background: "-webkit-linear-gradient(to bottom, #f4791f, #659999)",  
            background: "linear-gradient(to bottom, #f4791f, #659999)"
, minHeight:"500px" }}>
              <div>xs=6 md=4</div>
            </Item>
          </Grid>
          <Grid item xs={6} md={12}>
            <Item style={{background: "rgb(172,180,179)",
background: "linear-gradient(180deg, rgba(172,180,179,1) 0%, rgba(174,140,104,1) 100%)", minHeight:"500px" }}>xs=6 md=8</Item>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};
