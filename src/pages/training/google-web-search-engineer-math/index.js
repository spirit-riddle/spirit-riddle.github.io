import React from "react";
import "../../styles.css";
import Header from "../../blog/components/Header";

const MathList = () => (
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
    {/* Header Section */}
    <header
      style={{
        textAlign: "center",
        marginBottom: "2rem",
      }}
    >
      <a
        href="/"
        style={{
          textDecoration: "none",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#333",
          fontFamily: "'Courier New', Courier, monospace",
          display: "inline-block",
        }}
      >
        *_
      </a>
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#222",
          marginBottom: "1rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Mastering Google Engineer Math: Terminology and Beyond
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#555",
          textAlign: "center",
        }}
      >
        Embark on a journey to uncover the mathematical foundations that power Google’s search engine brilliance. Learn essential concepts through terminology, setting the stage for understanding algorithms and advanced systems.
      </p>
    </header>

    {/* Who Is This For Section */}
    <section
      style={{
        backgroundColor: "#eef4fb",
        borderRadius: "8px",
        padding: "2rem",
        marginBottom: "2rem",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          color: "#111",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Who Is This For?
      </h2>
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#555",
        }}
      >
        This course is for developers seeking to bridge software skills with advanced mathematics. If you're ready to dive into math logic behind modern algorithms, this is your starting point.
      </p>
      <h2
        style={{
          fontSize: "2rem",
          color: "#111",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Strategy
      </h2>
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#555",
        }}
      >
        By mastering terminology first, you'll ease into understanding the math. Each term comes with a brief description to guide you, but for now, just focus on recognizing and remembering them as we build toward deeper concepts.
      </p>
    </section>

    {/* Terminology Section */}
    <section>
      <h2
        style={{
          fontSize: "2rem",
          color: "#111",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Terminology
      </h2>
      <ul
        style={{
          listStyleType: "none",
          paddingLeft: "0",
          fontSize: "1.1rem",
          lineHeight: "2",
        }}
      >
        <li>
          <a href="/training/google-web-search-engineer-math/Graph_Theory_Terminology/">
            Graph Theory Terminology
          </a>
        </li>
        <li>
          <a href="/training/google-web-search-engineer-math/Algorithms_and_Models_Terminology/">
            Algorithms and Models Terminology
          </a>
        </li>
        <li>
          <a href="/training/google-web-search-engineer-math/Linear_Algebra_Terminology/">
            Linear Algebra Terminology
          </a>
        </li>
        <li>
          <a href="/training/google-web-search-engineer-math/Probability_and_Statistics_Terminology/">
            Probability and Statistics Terminology
          </a>
        </li>
      </ul>
    </section>

    {/* Math Roadmap Section */}
    <section>
      <h3
        style={{
          fontSize: "1.8rem",
          color: "#111",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        The Full Math Roadmap
      </h3>
      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.8",
          marginBottom: "1.5rem",
        }}
      >
        These fields provide a foundation for algorithms, system optimization, and deeper mathematical understanding:
      </p>
      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "1.5rem",
          fontSize: "1.1rem",
          lineHeight: 2,
        }}
      >
        <li>Graph Theory: Graph traversal, PageRank, and shortest paths.</li>
        <li>Linear Algebra: Vectors, matrices, and eigenvalues.</li>
        <li>Probability and Statistics: Distributions, Bayes' theorem, and inference.</li>
        <li>Algorithms: Text processing, clustering, and graph-based computations.</li>
      </ul>
    </section>

    {/* Graph Theory Video Section */}
    <section className="learning-graph-theory">
      <h2 className="section-title">
        Learning Graph Theory Programming with Python
      </h2>
      <p className="section-description">
        Explore graph theory programming with Python in this Google Engineer's guide. Learn how foundational concepts connect to search engine technologies.
      </p>

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/09_LlHjoEiY"
          title="Graph Theory Programming with Python by Google Engineer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="subsection-description">
        Specifically, you'll dive into:
      </p>
      <ul className="key-concepts-list">
        <li>Representing graphs in Python.</li>
        <li>Graph traversal algorithms like DFS and BFS.</li>
        <li>Practical applications of graph theory in coding.</li>
      </ul>
    </section>

    {/* In Progress Section */}
    <section
      style={{
        backgroundColor: "#fffbcc",
        borderRadius: "8px",
        padding: "1rem",
        marginTop: "2rem",
        textAlign: "center",
        color: "#555",
        fontSize: "1rem",
      }}
    >
      <p>
        <strong>In Progress:</strong> Content and insights are continuously being developed. Stay tuned for updates!
      </p>
    </section>
    
    <footer className="section-footer">
      <p>
        Ready to dive in? Watch the video, take notes, and share your insights. This is our collective journey into the world of graph theory and beyond!
      </p>
    </footer>
  </main>
);

export default MathList;
