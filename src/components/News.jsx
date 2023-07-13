import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

function News() {
  /* Fetch News from wordpress backend */

  const data = useStaticQuery(graphql`
    query MyQuery {
      allWpPost(limit: 3, sort: { date: DESC }) {
        nodes {
          author {
            node {
              firstName
            }
          }
          slug
          title
          id
          date(formatString: "MMMM DD, YYYY")
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
    <section className="bg-oceanBlue">
      <div className="flex flex-col mt-20 p-4 md:p-12">
        <h2 className="text-stone-50 text-5xl font-bold font-body sm:text-5xl text-left">
          Latest News
        </h2>
        <div className="grid grid-cols-3 gap-6 my-16">
          {posts.map((post) => {
            const image = getImage(post.featuredImage.node.localFile);
            return (
              <div
                key={post.id}
                className="flex flex-col space-y-2 h-full shadow-2xl text-stone-50"
              >
                <GatsbyImage
                  image={image}
                  alt={post.title}
                  className="min-h-full"
                />
                <h3 className="text-lg font-bold font-body sm:text-lg text-left">
                  {post.title}
                </h3>
                <p className="flex font-medium gap-3 italic relative items-center">
                  <span className="dash" />
                  {post.date}
                </p>
              </div>
            );
          })}
        </div>
        <button
          className="uppercase border-2 border-text-stone font-semibold rounded-sm bg-oceanBlue text-stone-50 py-4 px-14 hover:bg-stone-50 hover:text-oceanBlue w-fit mx-auto mt-10 shadow-box shadow-stone-50"
          type="button"
        >
          Read more
        </button>
      </div>
    </section>
  );
}

export default News;
