
import React from "react";

const IndexPage = () => (
  <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
    <h1>Welcome to Spirit Riddle</h1>
    <p>This is the main entry to our project documentation and resources.</p>
    <section style={{ marginTop: "1rem" }}>
      <h2>Documentation Links</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <a href="https://spirit-riddle.github.io/mkdocs-software-printer/" target="_blank" rel="noopener noreferrer">
            MkDocs Software Printer - User Guide
          </a>
        </li>
        <li>
          <a href="https://spirit-riddle.github.io/mkdocs-software-printer/system/" target="_blank" rel="noopener noreferrer">
            MkDocs Software Printer - System Manual
          </a>
        </li>
        <li>
          <a href="https://github.com/spirit-riddle/mkdocs-software-printer" target="_blank" rel="noopener noreferrer">
            Source Code on GitHub
          </a>
        </li>
      </ul>
    </section>
  </main>
);

export default IndexPage;
                