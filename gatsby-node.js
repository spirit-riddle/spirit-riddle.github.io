const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query all Markdown files
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

  // Check for query errors
  if (result.errors) {
    console.error(result.errors);
    return;
  }

  // Create pages for each Markdown file
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/training/appendice/website/${node.fields.slug}`,
      component: path.resolve(`./src/templates/markdown-template.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};

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
