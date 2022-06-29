import * as React from "react";
import { Box, Paper, styled } from "@mui/material";
import { projects } from "../../../assets/data";
import { palette } from "../../../assets/color";
import PropTypes from "prop-types";
function Item(props) {
  const { sx, ...other } = props;
  const {name, text, tags} = props.data;
  return (
    <Box
      sx={{
        color: `${palette.whitePurpel}`,
        bgcolor: `${palette.blue}`,
        borderColor: `${palette.purpel}`,
        fontSize: "0.875rem",
        p: 2,
        width: "20em",
        fontWeight: "600",
        ...sx
      }}
      {...other}
    >
      <div>header</div>
      <h3>{name}</h3>
      <p style={{fontSize:"0.8em", textAlign:"left", fontWeight:"lighter"}}>{text}</p>
      <div style={{display:"flex"}}> {tags.map((elem, index) => {
            return <p style={{fontSize:"0.75em", textAlign:"left", fontWeight:"lighter", paddingLeft:"0.7em"}}>{elem}</p>;
          })}</div>
    </Box>
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object
  ])
};
export const Projects = () => {
  return (
    <div
      style={{
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        minWidth: "30em",
        minHeight: "100vh",
        backgroundColor: palette.whitePurpel
      }}
    >
      <p
        style={{
          textAlign: "center",
          color: palette.blue,
          fontSize: "3.3em",
          fontWeight: "normal !important"
        }}
      >
        Project
      </p>
      <div style={{ justifyContent: "center", display: "flex" }}>
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
      </div>
    </div>
  );
};
