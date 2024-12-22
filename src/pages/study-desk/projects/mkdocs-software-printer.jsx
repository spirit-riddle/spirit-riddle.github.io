import React from "react";
import StudyDeskLayout from "../../../components/StudyDeskLayout/StudyDeskLayout";

const MkDocsSoftwarePrinterPage = () => (
  <StudyDeskLayout
    tabs={null}
    activeSubItem={"MkDocs Software Printer"}
  >
    <h2>MkDocs Software Printer</h2>

    <p>
      This project is a powerful tool for developers, enabling you to streamline
      the development process by generating software projects directly from
      documentation. It transforms well-structured documentation into actionable,
      reusable code components, saving time and making modular system creation
      seamless.
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
  </StudyDeskLayout>
);

export default MkDocsSoftwarePrinterPage;
