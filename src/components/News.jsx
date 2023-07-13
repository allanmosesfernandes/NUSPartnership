import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

function News() {
  /* Fetch News from wordpress backend */

  const data = useStaticQuery(graphql`
    query MyQuery {
      allWpPost(limit: 4, sort: { date: DESC }) {
        nodes {
          author {
            node {
              firstName
            }
          }
          slug
          title
          id
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(height: 200)
                }
              }
            }
          }
        }
      }
    }
  `);
  const posts = data.allWpPost.nodes;
  console.log(posts);
  return (
    <section>
      <div className="flex flex-col space-y-5 mt-20 p-4 md:p-12">
        <h2 className="text-oceanBlue text-5xl font-bold font-body sm:text-5xl text-left">
          Latest News
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {posts.map((post) => {
            const image = getImage(post.featuredImage.node.localFile);
            return (
              <div key={post.id} className="flex flex-col space-y-2 h-full shadow-2xl">
                <GatsbyImage image={image} alt={post.title} className="min-h-full" />
                <h3 className="text-oceanBlue text-xl font-bold font-body sm:text-xl text-left">
                  {post.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default News;
