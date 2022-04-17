import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Typography, Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import MenuItem from "@mui/material/MenuItem";
import "./style.css";

import img from "../Assets/Logo.png";

const pages = [
  "Teachers/Schools",
  "Families/Individuals",
  "Students",
  "About",
  "FAQs",
  "Contact",
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar position="static" className="container">
        <Toolbar className="toolbar" disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img src={img} alt="logo"></img>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              paddingLeft: "20px",
            }}
          >
            <img src={img} alt="logo"></img>
          </Typography>
          <Box
            sx={{
              float: "right !important",

              display: { xs: "flex", md: "none" },
            }}
          >
            <Button
              sx={{
                paddingLeft: "15px",
                paddingRight: "15px",
                color: "white",
                textTransform: "none",
                backgroundColor: "#2F3D4F !important",
              }}
            >
              Login
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className="menuicon" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box className="pages" sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Typography key={index} variant="body" className="page">
                {page}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                paddingLeft: "15px",
                paddingRight: "15px",
                color: "white",
                textTransform: "none",
                backgroundColor: "#2F3D4F !important",
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
