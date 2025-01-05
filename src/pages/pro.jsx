import React from "react";
import "./styles.css";

const ProPage = () => (
  <main
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
    <header style={{ marginBottom: "2rem", textAlign: "center" }}>
      <a
        href="/"
        style={{
          textDecoration: "none",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#333",
          fontFamily: "'Courier New', Courier, monospace",
        }}
      >
        *_
      </a>
    </header>
    <section style={{ textAlign: "center" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#222",
          marginBottom: "1rem",
        }}
      >
        Pro Edition
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          lineHeight: "1.8",
          color: "#555",
        }}
      >
        Waiting list coming soon.
      </p>
    </section>
  </main>
);

export default ProPage;
