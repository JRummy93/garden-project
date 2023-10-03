<style>
  @import
  url(`https://fonts.googleapis.com/css2?family=Montserrat&display=swap`);
</style>;
import * as React from "react";
import {
  MenuItem,
  Button,
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
import {
  UserButton,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

const Navbar = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            GROWISE
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
                {/* <Typography textAlign="center">Find My Plant</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu;
                  router.push("/contact");
                }}
              > */}
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
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            GROWISE
          </Typography>
          {/* Page Links for full screen page */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                setAnchorElNav(null);
                router.push("/explore");
              }}
              sx={{
                my: 2,
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Explore
            </Button>
            <SignedIn>
            <Button
              onClick={() => {
                setAnchorElNav(null);
                router.push("/my-garden");
              }}
              sx={{
                my: 2,
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              My Garden
            </Button>
            {/* <Button
              onClick={() => {
                setAnchorElNav(null);
                router.push("/find-my-plant");
              }}
              sx={{
                my: 2,
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Find My Plant
            </Button> */}
            </SignedIn>
            <Button
              onClick={() => {
                setAnchorElNav(null);
                router.push("/contact");
              }}
              sx={{
                my: 2,
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Contact Us
            </Button>
            <Button
              onClick={() => {
                setAnchorElNav(null);
                router.push("/about");
              }}
              sx={{
                my: 2,
                color: "white",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              About Us
            </Button>
          </Box>
          {/* USER MENU */}
          <Box sx={{ flexGrow: 0 }}>
            <SignedIn>
              <SignOutButton>
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    fontFamily: "Montserrat, sans-serif",
                    marginRight: "20px",
                  }}
                >
                  Sign-Out
                </Button>
              </SignOutButton>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    fontFamily: "Montserrat, sans-serif",
                    marginRight: "20px",
                  }}
                >
                  Sign-In
                </Button>
              </SignInButton>
            </SignedOut>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <UserButton />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
