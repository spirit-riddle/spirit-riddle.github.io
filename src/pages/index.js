import React from "react";
import "./styles.css";

const IndexPage = () => (
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
        Welcome to Spirit Riddle
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          color: "#555",
          lineHeight: "1.6",
          fontStyle: "italic",
        }}
      >
        The home of the <strong>Maverick Spirit</strong> suite of tools and
        products, designed for developers and creators. New products are being
        added as part of a growing collection that will one day form the
        complete Maverick Spirit toolkit.
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
        Current Projects
      </h2>
      <h3>MkDocs Software Printer</h3>
      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.8",
          marginBottom: "1.5rem",
        }}
      >
        This project is a key part of the Maverick Spirit toolset, designed to
        streamline the development process by generating software projects
        directly from documentation. With this tool, you never have to start
        from scratch when developing. It empowers you to create modular systems
        quickly, transforming well-structured documentation into actionable,
        reusable code components.
      </p>

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
            href="https://spirit-riddle.github.io/mkdocs-software-printer/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#007acc",
              fontWeight: "bold",
            }}
          >
            MkDocs Software Printer - User Guide
          </a>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <a
            href="https://spirit-riddle.github.io/mkdocs-software-printer/system/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#007acc",
              fontWeight: "bold",
            }}
          >
            MkDocs Software Printer - System Manual
          </a>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <a
            href="https://github.com/spirit-riddle/mkdocs-software-printer"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#007acc",
              fontWeight: "bold",
            }}
          >
            Source Code on GitHub
          </a>
        </li>
      </ul>

      <h2
        style={{
          fontSize: "2rem",
          color: "#111",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Blog
      </h2>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
          fontSize: "1rem",
          lineHeight: "1.8",
        }}
      >
        <li style={{ marginBottom: "1rem" }}>
          <a
            href="/blog/memory-algorithmic-cognitive-enhancer/"
            style={{
              textDecoration: "none",
              color: "#007acc",
              fontWeight: "bold",
            }}
          >
            Algorithmic Cognitive Enhancer
          </a>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#555" }}>
            Explore how rolling your voice through musical notes can improve
            memory and focus.
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "#999" }}>
            Published: December 2, 2024
          </p>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <a
            href="/blog/universal-service-adapter-model-lov/"
            style={{
              textDecoration: "none",
              color: "#007acc",
              fontWeight: "bold",
            }}
          >
            Universal Service Adapter (LOV)
          </a>
          <p style={{ margin: 0, fontSize: "0.9rem", color: "#555" }}>
            Discover how LOV simplifies complex integrations and empowers users.
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "#999" }}>
            Published: November 29, 2024
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
        This page is under construction as part of the ongoing development of
        the <strong>Maverick Spirit</strong> toolkit. Stay tuned for updates.
      </p>
    </footer>
  </main>
);

export default IndexPage;
