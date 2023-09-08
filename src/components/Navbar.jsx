import * as React from "react";
import {
  Tooltip,
  MenuItem,
  Button,
  Avatar,
  Container,
  Menu,
  Typography,
  IconButton,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useRouter } from "next/router";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          {/* Page Links for mobile screen page */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu;
                  router.push("/explore");
                }}
              >
                <Typography textAlign="center">Explore</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu;
                  router.push("/my-garden");
                }}
              >
                <Typography textAlign="center">My Garden</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu;
                  router.push("/find-my-plant");
                }}
              >
                <Typography textAlign="center">Find My Plant</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu;
                  router.push("/contact");
                }}
              >
                <Typography textAlign="center">Contact Us</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu;
                  router.push("/about");
                }}
              >
                <Typography textAlign="center">About Us</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          {/* Page Links for full screen page */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                setAnchorElNav(null);
                router.push("/explore");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Explore
            </Button>
            <Button
              onClick={() => {
                setAnchorElNav(null);
                router.push("/my-garden");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              My Garden
            </Button>
            <Button
              onClick={() => {
                setAnchorElNav(null);
                router.push("/find-my-plant");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Find My Plant
            </Button>
            <Button
              onClick={() => {
                setAnchorElNav(null);
                router.push("/contact");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Contact Us
            </Button>
            <Button
              onClick={() => {
                setAnchorElNav(null);
                router.push("/about");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About Us
            </Button>
          </Box>
          {/* USER MENU */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
