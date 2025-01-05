import React from "react";
import { ThemeProvider } from "../FrontSite/ThemeContext";
import TopAppBar from "../FrontSite/TopAppBar";

const EmptyLayout = ({ children }) => (
  <ThemeProvider>
    <TopAppBar />
    <div
      style={{
        padding: "3rem 2rem",
        fontFamily: "'Courier New', Courier, monospace",
        maxWidth: "900px",
        margin: "0 auto",
        borderRadius: "8px",
      }}
    >
      {children}
    </div>
  </ThemeProvider>
);

export default EmptyLayout;
