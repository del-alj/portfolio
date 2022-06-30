import * as React from "react";
import { Box, BottomNavigation } from "@mui/material";
import { Title } from "../pages/home/style";
import { palette } from "../../assets/color";

export const Footer = () => {
  return (
    <Box className="page" sx={{ flexGrow: 1 }}>
      <BottomNavigation
        style={{
          //  background: palette.première,
          background: "none",
          borderTop: `1px solid ${palette.whitePurpel}`,
          opacity: "1"
        }}
      >
        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          <p
            style={{
              textAlign: "left",
              color: palette.rose,
              fontWeight: "200px !imortant"
            }}
            // size="1em"
          >{`Made by del-alj @2022`}</p>
        </div>
      </BottomNavigation>
    </Box>
  );
};
