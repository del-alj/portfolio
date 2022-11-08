import * as React from "react";
import { Box, Button} from "@mui/material";
import { projects } from "../../../assets/data";
import { palette } from "../../../assets/color";
import PropTypes from "prop-types";
import dossier from "../../../assets/dossier.png";
import github from "../../../assets/github.png";
import {DivGrid} from "./styles";
import {Item} from "./tools/item";

export const Projects = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // minWidth: "30em",
        minHeight: "100%",
        paddingBottom: "5em",
        paddingTop: "5rem",
        // backgroundColor: palette.gray
      }}
    >
      <p
        style={{
          textAlign: "center",
          color: palette.blue,
          fontSize: "3.3em",
          fontWeight: "normal !important",
          fontFamily: "norwester",
        }}
      >
        Project
      </p>
      <DivGrid style={{ justifyContent: "center", display: "flex"}}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            marginTop: "7em",
            gridGap: "4em",
            // width: "100%",
            justifyContent: "center"
          }}
        >
          {projects.map((elem, index) => {
            return <Item data={elem}>{index}</Item>;
          })}
        </Box>
      </DivGrid>
        <Box sx={{
            display: "flex",
            marginTop: "7em",
            justifyContent: "center"
            // width: "100%",
          }}>
        <Button
          color="inherit"
          style={{
            fontSize: "1em",
            paddingTop: "3px",
            paddingBottom: "3px",
            color: palette.rose,
            border: `2px solid ${palette.rose}`,
            fontFamily: "norwester"
          }}
          href="https://github.com/del-alj"
          target="-blank"
        >
          {"More Projects"}
        </Button>
        </Box>
    </div>
  );
};
