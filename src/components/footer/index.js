import * as React from "react";
import { Box, BottomNavigation } from "@mui/material";
import { Title } from "../home/style";
import { home } from "../home/paragraph";
export const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
     
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
