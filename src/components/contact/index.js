import * as React from "react";
import { Box, Paper, styled } from "@mui/material";
import { home } from "../../assets/data";
import { palette } from "../../assets/color";
import mewallk from "../../assets/mewallk.gif";

export const Home = () => {
  return (
    <div
      style={{
        // border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        minWidth: "30em",
        minHeight: "100vh"
      }}
    >
      <Box
        sx={{
          // border: "1px solid black",
          alignSelf: "flex-start",
          flexDirection: "column",
          width: 400,
          marginLeft: "150px"
        }}
      >
        {/* 602 khesni nhayed mardin hna o padin me parent */}
        <h3
          style={{
            textAlign: "left",
            color: palette.yellow,
            fontSize: "0.8em",
            fontWeight: "normal !important"
          }}
        >
          {home.titel0}
        </h3>
        <h1
          style={{
            textAlign: "left",
            color: palette.gray,
            fontSize: "2.3em",
            fontWeight: "normal !important"
          }}
        >
          {home.titel1}
        </h1>
        <h1
          style={{
            textAlign: "left",
            color: palette.gray,
            opacity: 0.7,
            fontSize: "2em",
            fontWeight: `normal !important`
          }}
        >
          {home.titel2}
        </h1>
        <p
          style={{
            textAlign: "left",
            color: palette.whitePurpel,
            fontFamily: "nord",
            fontWeight: `normal !important`
          }}
        >
          {home.text}
        </p>
      </Box>

      <Box>
        <div
        // style={{ border: "1px solid yellow" }}
        >
          <img src={mewallk} style={{ height: "450px" }} />
        </div>
      </Box>
    </div>
  );
};
