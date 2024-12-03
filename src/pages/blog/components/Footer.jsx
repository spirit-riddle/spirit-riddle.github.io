import React from "react";

const Footer = () => (
  <footer
    style={{
      marginTop: "3rem",
      textAlign: "center",
      fontSize: "0.9rem",
      color: "#888",
    }}
  >
    <p>© {new Date().getFullYear()} Spirit Riddle. All rights reserved.</p>
    <p style={{ fontSize: "0.8rem", color: "#aaa" }}>
      Explore more about Spirit Riddle on our{" "}
      <a
        href="/"
        style={{
          textDecoration: "none",
          color: "#555",
          fontWeight: "bold",
        }}
      >
        Homepage
      </a>.
    </p>
  </footer>
);

export default Footer;
