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
  // Find out total number of posts
  const totalPosts = data.allWpPost.nodes.length;
  const postsPerPage = 3;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  // Create Pagination pages
  Array.from({ length: totalPages }).forEach((_, i) => {
    actions.createPage({
      path: `news/${i + 1}`,
      component: path.resolve("./src/pages/news.js"),
      context: {
        skip: i * postsPerPage,
        currentPage: i + 1,
        postsPerPage,
        totalPages,
      },
    });
  });

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
