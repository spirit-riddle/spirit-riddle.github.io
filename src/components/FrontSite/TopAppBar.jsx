import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { CssBaseline } from "@mui/material";
import { useTheme } from "./ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  boxShadow: 24,
  padding: "16px",
  borderRadius: "8px",
  width: "90%",
  maxWidth: "400px",
  "@media (max-width: 599px)": {
    width: "80%",
  },
};

const TopAppBar = ({ branding = "*_", homeLink = "/" }) => {
  const { theme, toggleTheme, syncWithOS, toggleSyncWithOS } = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchSubmit = () => {
    if (searchText.trim() !== "") {
      const encodedQuery = encodeURIComponent(searchText.trim());
      window.location.href = `/sitemap?q=${encodedQuery}`;
    }
    setSearchModalOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchSubmit();
    }
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

          {/* Search Icon */}
          <IconButton
            color="inherit"
            onClick={() => setSearchModalOpen(true)}
            aria-label="Search"
            sx={{
              marginRight: "8px",
            }}
          >
            <SearchIcon />
          </IconButton>

          {/* Theme Toggle */}
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

      {/* Search Modal */}
      <Modal
        open={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        aria-labelledby="search-modal"
        aria-describedby="search-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <Typography
              id="search-modal"
              variant="h6"
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              Search
            </Typography>
            <IconButton
              onClick={() => setSearchModalOpen(false)}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#e0e0e0",
              borderRadius: "4px",
              padding: "4px 8px",
            }}
          >
            <InputBase
              autoFocus
              placeholder="Type your search query..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyDown}
              sx={{ flexGrow: 1, fontSize: "1rem", color: "#333" }}
            />
            <IconButton
              color="inherit"
              onClick={handleSearchSubmit}
              aria-label="Submit search"
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default TopAppBar;
