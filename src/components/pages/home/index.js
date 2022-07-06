import * as React from "react";
import { Box, Paper, styled, Button } from "@mui/material";
import { home } from "../../../assets/data";
import { palette } from "../../../assets/color";
import mewallk from "../../../assets/mewallk.gif";
import meMobile from "../../../assets/memobile.gif";
import { Animation, Block, AnimationMobile } from "./animations.js";

export const Home = () => {
  return (
    <Block
      style={{
        display: "flex",
        flexDirection: "column",
        // minWidth: "30em",
        minHeight: "100vh",
        paddingTop: "10rem",
        // paddingLeft: "10rem",
        // paddingRight: "10rem",
      }}
    >
      <Box
        sx={{
          // border: "1px solid black",
          alignSelf: "flex-start",
          flexDirection: "column",
          minWidth: 200,
          width: 474,
          // marginLeft: "150px"
        }}
      >
        {/* 602 khesni nhayed mardin hna o padin me parent */}
        <p
          className="animated animatedFadeInUp fadeInUp"
          style={{
            textAlign: "left",
            color: palette.yellow,
            fontFamily: "norwester",
            fontSize: "1.2em",
            fontWeight: "normal !important",
          }}
        >
          {home.titel0}
        </p>
        <p
          className="animated animatedFadeInUp fadeInUp"
          style={{
            textAlign: "left",
            color: palette.gray,
            fontSize: "3.3em",
            fontWeight: "normal !important",
            fontFamily: "norwester",
          }}
        >
          {home.titel1}
        </p>
        <p
          className="animated animatedFadeInUp fadeInUp"
          style={{
            fontFamily: "norwester",
            textAlign: "left",
            color: palette.gray,
            opacity: 0.5,
            fontSize: "3em",
            fontWeight: `normal !important`,
          }}
        >
          {home.titel2}
        </p>
        <p
          className="animated animatedFadeInUp fadeInUp"
          style={{
            textAlign: "left",
            color: palette.whitePurpel,
            fontFamily: `'Roboto', sans-serif`,
            fontWeight: `normal !important`,
            fontSize: "1.5em",
          }}
        >
          {home.text}
        </p>
        <Button
            color="inherit"
            style={{
              fontSize: "1em",
              color: palette.première,
              width: "10em",
              border: `2px solid ${palette.yellow}`,
              background: palette.yellow,
              fontFamily: "norwester",
            }}
            href="mailto:douae.elalj@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            {"Get in touch"}
          </Button>
      </Box>

      <Box>
        <Animation
          // style={{ border: "1px solid yellow" }}
          src={mewallk}
        >
          <div className="outer">
            <div className="inner"></div>
            {/* <img
              src={mewallk}
              style={{ height: "450px", border: "1px solid red" }}
            /> */}
          </div>
        </Animation>
        <AnimationMobile>
          <img  className="animated animatedFadeInUp fadeInUp" src={meMobile}/>
        </AnimationMobile>
      </Box>
    </Block>
  );
};
