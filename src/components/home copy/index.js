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
          <Grid style={{ minHeight: "400px" }} item xs={10} md={5}>
            {/* <Box sx={{ backgroundColor: "blue", height: "100px" }}> */}
            <Title size="3em">{home.BigTitle}</Title>
            <Title size="1em">{home.text}</Title>
            {/* </Box> */}
          </Grid>
          <Grid item xs={10} md={5}>
            <Item style={{ minHeight: "400px" }}>xs=6 md=4</Item>
          </Grid>
          {projects.map((project, index) => { return (<Grid item xs={10} md={5}>
            <Item
              style={{
                background: backgrounds[0].background,
                background: backgrounds[0].linearGradient,
                minHeight: "700px",
                justifyContent: "center"
              }}
            >
              <Card>
                <h1>{project.title}</h1>
                <div>
                  <img src={project.picture} />
                </div>
              </Card>
            </Item>
          </Grid>)

})}
         
        </Grid>
      </div>
    </Box>
  );
};
