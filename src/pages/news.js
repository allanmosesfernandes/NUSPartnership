import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const news = ({ data }) => {
  // Fetch posts from WP
  const posts = data.allWpPost.nodes;
  console.log(posts);
  return (
    <div className="mt-40 px-4">
      <h2 className="text-oceanBlue text-4xl font-bold my-auto items-center font-body sm:text-5xl">
        Latest News
      </h2>
      <div className="flex flex-col mt-8">
        {
          // Loop through posts
          posts.map((post, index) => (
            <div className="grid font-body grid-cols-[1fr_2fr_1fr] w-[80%] mx-auto mb-4 items-center p-6 border-b-[1px] border-slate-500">
              {/* <GatsbyImage image={} /> */}
              <p className="text-oceanBlue font-semibold">
                {index < 10 ? `0${index + 1}` : index}
                .
              </p>
              <div>
                {/* <img src="https://via.placeholder.com/200" alt="post" /> */}
                <GatsbyImage image={post.featuredImage.node.gatsbyImage} alt="post" />
              </div>
              <h2 className="flex flex-col gap-4 font-semibold text-2xl">
                <span className="font-medium text-lg text-slate-500">{post.date}</span>
                {post.title}
              </h2>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export const query = graphql`
  query MyQuery {
    allWpPost {
      nodes {
        date(formatString: "MMMM DD, YYYY")
        id
        slug
        title
        featuredImage {
          node {
            gatsbyImage(layout: CONSTRAINED, height: 200, width: 200, fit: COVER)
          }
        }
      }
    }
  }
`;

export default news;
