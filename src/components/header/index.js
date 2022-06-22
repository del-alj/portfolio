import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Typography,
  Toolbar,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const pages = ["About", "Project", "Wip", "Contact"];
const Project = ["project1", "project2", "project3", "project4"];

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      // sx={style}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {Project.map((elem) => {
      return <MenuItem onClick={handleMenuClose}>{elem}</MenuItem>
      })}
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
    </Menu>
  );

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Button color="inherit">{pages[0]}</Button>
          <Button
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            {pages[1]}
          </Button>

          <Button color="inherit">{pages[2]}</Button>
          <Button color="inherit">{pages[3]}</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* News */}
          </Typography>
          <Button color="inherit">
            <Link target="_blank" href="https://www.linkedin.com/in/douae-el-alj/">
              <LinkedInIcon color="action" />
            </Link>
          </Button>
          <Button color="inherit">
            <Link target="_blank" href="https://github.com/del-alj">
              <GitHubIcon color="action" />
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};
