import React from "react";
import "../styles.css";

const TrainingIndex = () => (
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
      <h1 style={{ fontSize: "2.5rem", margin: "0", fontWeight: "normal" }}>
        Training Courses
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          color: "#555",
          lineHeight: "1.6",
          fontStyle: "italic",
        }}
      >
        A curated set of courses for transitioning from software development
        to mathematical mastery, annotated for self-learners and small groups.
      </p>
    </header>

    <section>
      <h2
        style={{
          fontSize: "2rem",
          color: "#111",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Available Courses
      </h2>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
          fontSize: "1rem",
          lineHeight: "2",
        }}
      >
        <li style={{ marginBottom: "1rem" }}>
          <a
            href="/training/lov-math-foundations/"
            style={{
              textDecoration: "none",
              color: "#007acc",
              fontWeight: "bold",
            }}
          >
            LOV Math Foundations
          </a>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#555" }}>
            Master the essential math concepts behind modern systems, from graph theory to linear algebra. This foundational course bridges software development skills with advanced mathematical principles, providing the tools to tackle complex problem-solving with confidence.
          </p>
        </li>
      </ul>
    </section>

    <footer
      style={{
        marginTop: "3rem",
        textAlign: "center",
        fontSize: "0.9rem",
        color: "#888",
      }}
    >
      <p>© {new Date().getFullYear()} Spirit Riddle. All rights reserved.</p>
      <p
        style={{
          fontSize: "0.8rem",
          color: "#aaa",
        }}
      >
        This page is part of the <strong>Maverick Spirit</strong> toolkit.
        Stay tuned for updates as we add more training resources.
      </p>
    </footer>
  </main>
);

export default TrainingIndex;
