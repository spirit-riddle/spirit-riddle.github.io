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
        LOV Math Foundations
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "#555",
          textAlign: "center",
        }}
      >
        Embark on a journey to uncover the mathematical foundations behind advanced search engine. Learn essential concepts through terminology, setting the stage for understanding algorithms and complex systems.
      </p>
    </header>

    {/* Who Is This For Section */}
    <section>
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
    </section>
    <section>
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
          marginBottom: "1rem",
        }}
      >
        Memorize these appendices as part of your homework while taking the course to speed up your learning. You don’t need to fully understand them yet—focus on familiarizing yourself with the words, symbols, and patterns. When you learn these concepts in the course, these techniques will speed up your studies.
      </p>
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#555",
          marginBottom: "1rem",
        }}
      >
        To enhance your memory, explore our free blog post,
        <a
          href="/blog/memory-algorithmic-cognitive-enhancer/"
          style={{ color: "#007bff", textDecoration: "underline" }}
        >
          Algorithmic Cognitive Enhancer: Unlocking Better Memory Through Rhythmic Repetition
        </a>,
        for tips and techniques. The advanced method, called Hacker Reading (Bionic Reading), is available in the Pro edition and simplifies memorization, helping you recognize concepts faster. Combining these tools will make it easier to learn the terminology and logic, enabling rapid progress through the course.
      </p>
    </section>

    {/* Appendices */}
    <section>
      <h2
        style={{
          fontSize: "2rem",
          color: "#111",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Download LOV Math Appendices
      </h2>
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#555",
          marginBottom: "1rem",
        }}
      >
        Explore the appendices for Graph Theory, Algorithms, Linear Algebra, and
        more. Each appendix is available in a web-friendly version, a standard PDF,
        and a Pro edition featuring advanced enhancements.
      </p>

      {/* Links data */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "2rem",
          fontSize: "1rem",
        }}
      >
        <thead
          style={{
            backgroundColor: "#f0f0f0",
            textAlign: "left",
          }}
        >
          <tr>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Appendix</th>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
              Interactive Web View
            </th>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
              Standard PDF
            </th>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
              Pro Edition (Hacker Reading)
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              title: "Graph Theory",
              web: "/training/lov-math-foundations/website/Appendix_1_Graph_Theory",
              standard: "/training/lov-math-foundations/pdf/Standard%20-%20Appendix%201%20Graph%20Theory.pdf",
              pro: "/pro",
            },
            {
              title: "Algorithms And Models",
              web: "/training/lov-math-foundations/website/Appendix_2_Algorithms_And_Models",
              standard: "/training/lov-math-foundations/pdf/Standard%20-%20Appendix%202%20Algorithms%20And%20Models.pdf",
              pro: "/pro",
            },
            {
              title: "Linear Algebra",
              web: "/training/lov-math-foundations/website/Appendix_3_Linear_Algebra",
              standard: "/training/lov-math-foundations/pdf/Standard%20-%20Appendix%203%20Linear%20Algebra.pdf",
              pro: "/pro",
            },
            {
              title: "Probability And Statistics",
              web: "/training/lov-math-foundations/website/Appendix_4_Probability_And_Statistics",
              standard: "/training/lov-math-foundations/pdf/Standard%20-%20Appendix%204%20Probability%20And%20Statistics.pdf",
              pro: "/pro",
            },
            {
              title: "Comprehensive Terminology",
              web: "/training/lov-math-foundations/website/Appendix_5_Comprehensive_Terminology",
              standard: "/training/lov-math-foundations/pdf/Standard%20-%20Appendix%205%20Comprehensive%20Terminology.pdf",
              pro: "/pro",
            },
            {
              title: "Comprehensive Algorithms",
              web: "/training/lov-math-foundations/website/Appendix_6_Comprehensive_Algorithms",
              standard: "/training/lov-math-foundations/pdf/Standard%20-%20Appendix%206%20Comprehensive%20Algorithms.pdf",
              pro: "/pro",
            },
            {
              title: "Rosetta Stone For Math And Code",
              web: "/training/lov-math-foundations/website/Appendix_7_Rosetta_Stone_For_Math_And_Code",
              standard: "/training/lov-math-foundations/pdf/Standard%20-%20Appendix%207%20Rosetta%20Stone%20For%20Math%20And%20Code.pdf",
              pro: "/pro",
            },
          ].map((appendix, index) => (
            <tr key={index}>
              <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
                <small>Appendix {index + 1}</small>
                <br />
                {appendix.title}
              </td>
              <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
                <a href={appendix.web}>View Online</a>
              </td>
              <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
                <a href={appendix.standard}>Download PDF</a>
              </td>
              <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
                <a href={appendix.pro}>Download Pro PDF</a>
              </td>
            </tr>
          ))}
          <tr>
            <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
              All Appendices
            </td>
            <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}></td>
            <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
              <a href="/training/lov-math-foundations/pdf/Standard%20-%20Appendices.zip">Download All Standard</a>
            </td>
            <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
              <a href="/pro">Download All Pro</a>
            </td>
          </tr>
        </tbody>
      </table>
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
        <li>Algorithms: Text processing, clustering, and graph-based computations.</li>
        <li>Linear Algebra: Vectors, matrices, and eigenvalues.</li>
        <li>Probability and Statistics: Distributions, Bayes' theorem, and inference.</li>
      </ul>
    </section>



    {/* Heaps in Graph Theory */}
    <section>
      <h2
        style={{
          fontSize: "2rem",
          color: "#111",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Heaps in Graph Theory
      </h2>
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#555",
          marginBottom: "1rem",
        }}
      >
        In graph theory and programming, heaps are powerful data structures used to optimize algorithms, especially those involving priority queues, shortest paths, or minimum spanning trees. Below is an overview of heaps commonly used in graph theory and their specific applications.
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "2rem",
          fontSize: "1rem",
        }}
      >
        <thead
          style={{
            backgroundColor: "#f0f0f0",
            textAlign: "left",
          }}
        >
          <tr>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Heap Type</th>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Description</th>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Applications</th>
            <th style={{ padding: "0.5rem", border: "1px solid #ddd" }}>Strengths</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              type: "Binary Heap",
              description: "A binary tree that satisfies the heap property (min-heap or max-heap).",
              applications: "Dijkstra’s and Prim’s algorithms for priority queues.",
              strengths: "Simple and efficient for most use cases.",
            },
            {
              type: "Fibonacci Heap",
              description:
                "A collection of trees with a more relaxed structure, allowing faster decrease-key operations.",
              applications:
                "Efficient for Dijkstra’s and Prim’s algorithms in dense graphs.",
              strengths:
                "Theoretical efficiency for decrease-key operations, though complex to implement.",
            },
            {
              type: "Pairing Heap",
              description:
                "A multi-way tree with comparable performance to Fibonacci heaps but easier to implement.",
              applications:
                "Prim’s algorithm and shortest path algorithms with frequent merges.",
              strengths: "Practical and efficient for decrease-key-heavy operations.",
            },
            {
              type: "d-ary Heap",
              description:
                "A generalization of binary heaps with \( d \) children per node.",
              applications:
                "Dijkstra’s algorithm with tunable \( d \) for dense graphs.",
              strengths: "Reduces tree height, leading to fewer comparisons.",
            },
            {
              type: "Binomial Heap",
              description:
                "A collection of binomial trees supporting efficient merging.",
              applications:
                "Minimum spanning tree algorithms and graph clustering.",
              strengths: "Efficient merge operations for dynamic graph problems.",
            },
            {
              type: "Skew Heap",
              description: "A self-adjusting binary heap optimized for merging.",
              applications: "Prim’s algorithm for frequent priority queue merging.",
              strengths: "Simpler implementation with good practical performance.",
            },
            {
              type: "Leftist Heap",
              description:
                "A binary tree optimized to ensure the shortest path to a leaf is always on the right.",
              applications: "Dynamic MST algorithms with frequent merges.",
              strengths: "Highly efficient for merge-heavy graph algorithms.",
            },
            {
              type: "Weak Heap",
              description:
                "A relaxed version of binary heaps with a weaker heap property.",
              applications: "Sorting edges in Kruskal’s algorithm.",
              strengths: "Optimal sorting for edge-weight operations.",
            },
          ].map((heap, index) => (
            <tr key={index}>
              <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
                {heap.type}
              </td>
              <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
                {heap.description}
              </td>
              <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
                {heap.applications}
              </td>
              <td style={{ padding: "0.5rem", border: "1px solid #ddd" }}>
                {heap.strengths}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#555",
          marginBottom: "1rem",
        }}
      >
        Memorization Tip:
        <ul>
          <li>
            <strong><em>Shortest Path Algorithms</em></strong>: Use <strong>Binary</strong>, <strong>Fibonacci</strong>, or <strong>d-ary heaps</strong>.
          </li>
          <li>
            <strong><em>MST (Prim/Kruskal)</em></strong>: Use <strong>Fibonacci</strong>, <strong>Pairing</strong>, <strong>Skew</strong>, or <strong>Leftist heaps</strong>.
          </li>
          <li>
            <strong><em>Dynamic Graph Problems</em></strong>: Favor heaps with efficient merging like <strong>Binomial</strong> or <strong>Leftist heaps</strong>.
          </li>
        </ul>
      </p>
      <br />
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
  </main >
);

export default MathList;
