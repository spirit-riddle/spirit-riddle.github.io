import React from "react";
import EmptyLayout from "../components/EmptyLayout/EmptyLayout";
import "./styles.css";

const IndexPage = () => (
  <EmptyLayout>
    <main
      style={{
        fontFamily: "'Courier New', Courier, monospace",
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
            fontFamily: "'Courier New', Courier, monospace",
          }}
        >
          *_
        </a>
        <h1 style={{ fontSize: "2.5rem", margin: "0", fontWeight: "normal" }}>
          Welcome to Spirit Riddle
        </h1>
        {/* <ThemeToggle /> */}
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            fontStyle: "italic",
          }}
        >
          <small><em>Innovation for a Better Tomorrow</em></small>
          <br />
          Spirit Riddle blends software development, advanced mathematics, and energy efficiency into a unified platform for growth. Join the journey from foundational learning to enterprise solutions.
        </p>
      </header>

      {/* Explore the Sitemap */}
      <section>
        <br />
        <br />
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.8",
            marginBottom: "1.5rem",
          }}
        >
          Discover everything Spirit Riddle has to offer in one place! Use our{" "}
          <a
            href="/sitemap"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Sitemap
          </a>{" "}
          to explore blogs, training pages, and resources.
        </p>
      </section>

      {/* Training Section */}
      <section>
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Training
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
              href="/training/courses/lov-math-foundations/"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              LOV Math Foundations
            </a>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              Master the essential math concepts behind modern systems, from graph theory to linear algebra. This foundational course bridges software development skills with advanced mathematical principles, providing the tools to tackle complex problem-solving with confidence.
            </p>
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      {/* <section>
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Projects
      </h2>
      <h3>MkDocs Software Printer</h3>
      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.8",
          marginBottom: "1.5rem",
        }}
      >
        This project is a powerful tool for developers, enabling you to
        streamline the development process by generating software projects
        directly from documentation. It transforms well-structured documentation
        into actionable, reusable code components, saving time and making modular
        system creation seamless.
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
              fontWeight: "bold",
            }}
          >
            Source Code on GitHub
          </a>
        </li>
      </ul>
    </section> */}

      {/* Blog Section */}
      <h2
        style={{
          fontSize: "2rem",
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
            href="/blog/the-spirit-riddle-sitemap-product-and-philosophy/"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            The Spirit Riddle Sitemap Redefines Navigation with Innovation and Purpose
          </a>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            Explore how Spirit-Riddle.com transforms a simple sitemap into a dynamic, AI-driven product for organizing and evolving content relationships.
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem" }}>
            Published: January 03, 2024
          </p>
        </li>

        <li style={{ marginBottom: "1rem" }}>
          <a
            href="/blog/how-to-become-successful-in-tech-and-life/"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            How to Become Successful in Tech and Life
          </a>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            Explore actionable insights and strategies for thriving in the tech industry and beyond. Learn how to start your journey toward success, no matter where you are today.
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem" }}>
            Published: December 29, 2024
          </p>
        </li>

        <li style={{ marginBottom: "1rem" }}>
          <a
            href="/blog/crafting-spirit-riddles-training-methodology/"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Crafting Spirit Riddle's Training Methodology
          </a>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            Explore the methodology behind Spirit Riddle's standardized training courses, designed for consistency and clarity in learning.
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem" }}>
            Published: December 9, 2024
          </p>
        </li>

        <li style={{ marginBottom: "1rem" }}>
          <a
            href="/blog/memory-algorithmic-cognitive-enhancer/"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Algorithmic Cognitive Enhancer
          </a>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            Explore how rolling your voice through musical notes can improve
            memory and focus.
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem" }}>
            Published: December 2, 2024
          </p>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <a
            href="/blog/universal-service-adapter-model-lov/"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Universal Service Adapter (LOV)
          </a>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            Discover how LOV simplifies complex integrations and empowers users.
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem" }}>
            Published: November 29, 2024
          </p>
        </li>
      </ul>

      <footer
        style={{
          marginTop: "3rem",
          textAlign: "center",
          fontSize: "0.9rem",
        }}
      >
        <p>© {new Date().getFullYear()} Spirit Riddle. All rights reserved.</p>
        <p
          style={{
            fontSize: "0.8rem",
          }}
        >
          Exciting updates are on the way! This site is under active construction to bring you even more tools, training, and resources—be sure to check back soon for the latest improvements.
        </p>
      </footer>
    </main>
  </EmptyLayout>
);

export default IndexPage;
