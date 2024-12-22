import React from "react";

const EmptyLayout = ({ children }) => (
  <div
    style={{
      padding: "3rem 2rem",
      fontFamily: "'Courier New', Courier, monospace",
      backgroundColor: "#f4f4f4",
      color: "#333",
      maxWidth: "900px",
      margin: "0 auto",
      borderRadius: "8px",
    }}
  >
    {children}
  </div>
);

export default EmptyLayout;
