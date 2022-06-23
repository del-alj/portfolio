import * as React from "react";
import { Box, BottomNavigation } from "@mui/material";
import { Wave } from "../wave/index";
import { Title } from "../home/style";
import { home } from "../home/paragraph";
export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Wave />
      <BottomNavigation>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          <Title size="1em">{`Made by ${home.autor}`}</Title>
        </div>
      </BottomNavigation>
    </Box>
  );
};
