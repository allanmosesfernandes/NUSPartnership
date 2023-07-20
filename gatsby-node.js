const { graphql } = require("gatsby");
const path = require("path");

async function turnPostsIntoPages({ graphql, actions }) {
// 1. Get a template for this page
  const postTemplate = path.resolve("./src/templates/SingleBlog.js");

  // 2. Query all posts
  const { data } = await graphql(`
      query MyQuery {
        allWpPost {
          nodes {
            slug
            uri
            id
          }
        }
      }
    `);

  // 3. Loop over each post and create a page for that post
  data.allWpPost.nodes.forEach((post) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `news/${post.slug}`,
      component: postTemplate,
      context: {
        id: post.id,
      },
    });
  });
}

exports.createPages = async (params) => {
  await turnPostsIntoPages(params);
};
