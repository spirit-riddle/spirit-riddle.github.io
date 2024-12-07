import React from "react";

const Header = ({ title, subheader, date }) => (
  <header style={{ marginBottom: "2rem" }}>
    <div style={{ marginBottom: "1rem" }}>
      <a
        href="/"
        style={{
          textDecoration: "none",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#333",
          fontFamily: "'Courier New', Courier, monospace",
        }}
      >
        *_
      </a>
    </div>
    <h1 style={{ fontSize: "2.5rem", margin: "0", fontWeight: "normal" }}>
      {title}
    </h1>
    <p
      style={{
        fontSize: "1.1rem",
        color: "#555",
        lineHeight: "1.6",
        fontStyle: "italic",
      }}
    >
      {subheader}
    </p>
    {date && (
      <p
        style={{
          fontSize: "0.9rem",
          color: "#777",
          marginTop: "0.5rem",
          fontStyle: "italic",
        }}
      >
        Published on: {date}
      </p>
    )}
  </header>
);

export default Header;
