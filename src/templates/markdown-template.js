import React from "react";
import { graphql } from "gatsby";
import "../pages/styles.css";
import Header from "../pages/blog/components/Header";
import Footer from "../pages/blog/components/Footer";

const MarkdownTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
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
      <Header
        title={post.frontmatter.title}
        subheader="Dive into this topic as part of the Spirit Riddle training."
      />
      <article
        style={{
          fontSize: "1rem",
          lineHeight: "1.8",
        }}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <Footer />
    </main>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default MarkdownTemplate;
