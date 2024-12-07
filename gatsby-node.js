const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query all markdown files
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Create a page for each markdown file
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/training/${node.fields.slug}`,
      component: path.resolve(`./src/templates/markdown-template.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};

// Add a slug field to markdown files
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const slug = fileNode.relativePath.replace(/\.md$/, "");
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
