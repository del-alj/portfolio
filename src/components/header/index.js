import * as React from "react";
import { AppBar, Box, Button, Typography, Toolbar } from "@mui/material";
import { header } from "../../assets/data";
import { palette } from "../../assets/color";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export const Header = () => {
  const [theme, setTheme] = useState(0);

  const list = header.list;

  const changeColorBc = (bc) => {
    const elem = document.getElementsByClassName("App");
    const elem1 = document.getElementsByClassName("page");
    elem[0].style.background = bc;
    elem1[0].style.background = bc;
  };
  const path = window.location.href;
  let temp = "";
  temp = path.split("/");
  useEffect(() => {
    if (temp[3]) {
      setTheme(1);
      changeColorBc(palette.whitePurpel);

    } else setTheme(0);
  }, [temp]);

  return (
    <Box sx={{ flexGrow: 1, mr: 60 }}>

    <AppBar
      className="page"
      style={{
        background: palette.première,
        boxShadow: "none",
        // maxWidth: "1440px",
        // display: "flex",
        // alignItems: "center",
      }}
    >
      <Toolbar style={{
        display: "flex",
        justifyItems: "center",
        maxWidth: "1440px",
        flexDirection: "space-between",
        width: "100%",
        marginLeft: "auto",
        boxSizing: "border-box",
        marginRight: "auto",
      }}>
        <Link style={{ textDecoration: "none" }} to={`/`}>
          <Button
            onClick={(e) => {
              changeColorBc(palette.purpel);
              setTheme(0);
            }}
            color="inherit"
            style={{
              fontSize: "1em",
              color: `${theme === 0 ? palette.gray : palette.blue}`,
              fontFamily: "norwester"
            }}
          >
            {header.logo}
          </Button>
        </Link>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        {list.map((elem, index) => {
          return (
            <Link
              key={`Link${index}`}
              style={{ textDecoration: "none" }}
              to={`/${elem}`}
              onClick={(e) => {
                changeColorBc(palette.whitePurpel);
                setTheme(1);
              }}
            >
              <Button
                key={`button${index}`}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
                style={{
                  color: `${theme === 0 ? palette.gray : palette.blue}`,
                  fontFamily: "norwester"
                }}
              >
                {elem}
              </Button>
            </Link>
          );
        })}
        <Button
          className=""
          color="inherit"
          style={{
            fontSize: "0.7em",
            paddingTop: "3px",
            paddingBottom: "3px",
            color: theme === 0 ? palette.yellow : palette.rose,
            border: `2px solid ${theme === 0 ? palette.yellow : palette.rose}`,
            fontFamily: "norwester"
          }}
        >
          {header.button}
        </Button>
      </Toolbar>
    </AppBar>
    </Box>
  );
};
