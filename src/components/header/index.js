import * as React from "react";
import { AppBar, Box, Button, Typography, Toolbar } from "@mui/material";
import { header } from "../../assets/data";
import { palette } from "../../assets/color";

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const list = header.list;
  return (
          
    // <Box sx={{ flexGrow: 1, mr: 60 }}>

      <AppBar  style={{ background: palette.première , marginLeft: "50px"}}>
        <Toolbar>
          <Button
            color="inherit"
            style={{
              fontSize: "1em",
              color: palette.gray,
              fontFamily: "norwester"
            }}
          >
            {header.logo}
          </Button>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          {list.map((elem) => {
            return (
              <Button
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                style={{ color: palette.gray, fontFamily: "norwester" }}
              >
                {elem}
              </Button>
            );
          })}
          <Button
            color="inherit"
            style={{
              fontSize: "0.7em",
              paddingTop: "3px",
              paddingBottom: "3px",
              color: palette.yellow,
              border: `2px solid ${palette.yellow}`,
              fontFamily: "norwester"
            }}
          >
            {header.button}
          </Button>
        </Toolbar>
      </AppBar>
    // </Box>
  );
};
