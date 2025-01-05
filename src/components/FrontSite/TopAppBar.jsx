import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { CssBaseline } from "@mui/material";
import { useTheme } from "./ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const TopAppBar = ({ branding = "*_", homeLink = "/" }) => {
  const { theme, toggleTheme, syncWithOS, toggleSyncWithOS } = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme === "dark" ? "#333" : "#f4f4f4", // Dynamic background
          color: theme === "dark" ? "#fff" : "#000", // Dynamic text color
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "900px",
            m: "0px auto",
            width: "100%",
            p: "0 32px",
            "@media (min-width: 600px)": { // Tablet and above
              padding: "0 66px",
            },
            "@media (max-width: 599px)": { // Mobile
              padding: "0 16px",
            },
          }}
        >

          <Typography
            variant="h6"
            component="a"
            href={homeLink}
            sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
          >
            {branding}
          </Typography>
          <IconButton
            color="inherit"
            onClick={handleMenuOpen}
            aria-label="Theme selection menu"
          >
            {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={toggleTheme}>
              {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </MenuItem>
            <MenuItem>
              <FormControlLabel
                control={<Checkbox checked={syncWithOS} onChange={toggleSyncWithOS} />}
                label="Sync with OS"
              />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopAppBar;
