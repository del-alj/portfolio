import * as React from "react";
import { Box, BottomNavigation } from "@mui/material";
import { Title } from "../home/style";
import { home } from "../home/paragraph";
import {palette} from "../../assets/color";

export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <BottomNavigation style={{ background: palette.première,  borderTop: `1px solid ${palette.gray}`, opacity: "1"}}>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Title style={{textAlign :"left", color:palette.rose}} size="1em">{`Made by ${home.autor} @2022`}</Title>
        </div>
      </BottomNavigation>
    </Box>
  );
};
