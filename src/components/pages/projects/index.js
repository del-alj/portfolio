import * as React from "react";
import { Box, Button} from "@mui/material";
import { projects } from "../../../assets/data";
import { palette } from "../../../assets/color";
import PropTypes from "prop-types";
import dossier from "../../../assets/dossier.png";
import github from "../../../assets/github.png";
function Item(props) {
  const { sx, ...other } = props;
  const { name, text, tags, link } = props.data;
  return (
    <Box
      sx={{
        textAlign: "left",
        color: `${palette.whitePurpel}`,
        bgcolor: `${palette.blue}`,
        borderColor: `${palette.purpel}`,
        fontSize: "0.875rem",
        fontFamily: `'Roboto', sans-serif`,
        p: 2,
        width: "15em",
        fontWeight: "600",
        opacity: "0.7",
        ...sx
      }}
      {...other}
    >
      <div style={{ display: "flex", justifyContent:"space-between"}}>
        <img style={{ width: "24px", height: "23.5px" }} src={dossier} />
        <a href={link} target="_blank">
        <img style={{ width: "24px" }} src={github} />
        </a>
      </div>
      <h3>{name}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "72%",
          justifyContent: "space-between"
        }}
      >
        <p style={{ fontSize: "0.9em", textAlign: "left", fontWeight: "500" }}>
          {text}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", paddingBottom: "0.5em" }}>
          {tags.map((elem, index) => {
            return (
              <p
                style={{
                  fontSize: "0.75em",
                  lineHeight: "0px",
                  textAlign: "left",
                  fontWeight: "300",
                  paddingLeft: "0.7em"
                }}
              >
                {elem}
              </p>
            );
          })}
        </div>
      </div>
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
        display: "flex",
        flexDirection: "column",
        minWidth: "30em",
        minHeight: "100%",
        paddingBottom: "5em",
        // backgroundColor: palette.gray
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
      <div style={{ justifyContent: "center", display: "flex"}}>
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
