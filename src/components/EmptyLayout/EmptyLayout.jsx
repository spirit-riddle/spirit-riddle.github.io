import React from "react";
import { ThemeProvider } from "../FrontSite/ThemeContext";
import TopAppBar from "../FrontSite/TopAppBar";
import { Box } from "@mui/material";

const EmptyLayout = ({ children }) => (
  <ThemeProvider>
    <TopAppBar />
    <Box
      sx={{
        padding: "3rem 2rem",
        fontFamily: "'Courier New', Courier, monospace",
        maxWidth: "900px",
        margin: "0 auto",
        borderRadius: "8px",
        "@media (max-width: 480px)": {
          padding: "5px",
        },
      }}
    >
      {children}
    </Box>
  </ThemeProvider>
);

export default EmptyLayout;
