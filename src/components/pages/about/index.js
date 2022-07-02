import * as React from "react";
import { Box, Paper, styled } from "@mui/material";
import { about } from "../../../assets/data";
import { palette } from "../../../assets/color";
import me from "../../../assets/me.gif";
import PropTypes from "prop-types";
import { BoxDiv, BoxGrid } from "../../style/styled-component";
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        color: `${palette.blue}`,
        border: "1px solid",
        borderColor: `${palette.purpel}`,
        p: 1,
        borderRadius: 1,
        fontSize: "0.875rem",
        width: "7em",
        fontWeight: "600",
        // paddingLeft: "2em",
        ...sx
      }}
      {...other}
    />
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

export const About = () => {
  return (
    <div
      style={{
        // border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        // minWidth: "30em",
        minHeight: "100%",
        paddingLeft: "10rem",
        paddingTop: "10rem",
        paddingRight: "10rem"
        // backgroundColor: palette.gray
      }}
    >
      <Box
        sx={{
          // border: "1px solid black",
          alignSelf: "center",
          flexDirection: "column",
          // width: 474,
          // marginLeft: "150px",
          display: "flex"
        }}
      >
        {/* 602 khesni nhayed mardin hna o padin me parent */}

        <p
          style={{
            textAlign: "center",
            color: palette.blue,
            fontSize: "3.3em",
            fontWeight: "normal !important"
          }}
        >
          About me
        </p>
        <BoxDiv>
          <img
            style={{
              width: "300px",
              height: "auto"
            }}
            src={me}
          />

          <p
            style={{
              textAlign: "left",
              color: palette.purpel,
              fontFamily: `'Roboto', sans-serif`,
              fontWeight: `normal !important`,
              fontSize: "1.5em",
              width: "300px"
            }}
          >
            {about.paragraph}
          </p>
        </BoxDiv>
        <BoxGrid
        >
          {about.tags.map((elem, index) => {
            return <Item>{elem}</Item>;
          })}
        </BoxGrid>
      </Box>
    </div>
  );
};
