import React from "react";
import { graphql } from "gatsby";
import BlogHeader from "../components/FrontSite/BlogHeader";
import BlogFooter from "../components/FrontSite/BlogFooter";
import "../pages/styles.css";
import EmptyLayout from "../components/EmptyLayout/EmptyLayout";

const MarkdownTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <EmptyLayout>
      <main
        style={{
          padding: "3rem 2rem",
          fontFamily: "'Courier New', Courier, monospace",
          maxWidth: "900px",
          margin: "0 auto",
          borderRadius: "8px",
        }}
      >
        {post?.frontmatter?.title && (
          <BlogHeader
            showBlogTitle={false}
            title={post.frontmatter.title}
          />
        )}
        <article
          style={{
            fontSize: "1rem",
            lineHeight: "1.8",
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <BlogFooter />
      </main>
    </EmptyLayout>
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
