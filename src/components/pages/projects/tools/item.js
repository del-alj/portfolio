import * as React from "react";
import { Box, Button } from "@mui/material";
import { palette } from "../../../../assets/color";
import PropTypes from "prop-types";
import dossier from "../../../../assets/dossier.png";
import github from "../../../../assets/github.png";
export const Item = (props) => {
  const { sx, ...other } = props;
  const { name, text, tags, link } = props.data;
  return (
    <div>
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
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
          <p
            style={{ fontSize: "0.9em", textAlign: "left", fontWeight: "500" }}
          >
            {text}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              paddingBottom: "0.5em"
            }}
          >
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
    </div>
  );
};

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
