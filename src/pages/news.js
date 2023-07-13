import React from "react";
import { graphql } from "gatsby";

const news = ({ data }) => {
  // Fetch data from GraphQL query
  const posts = data.allWpPost.nodes;

  return (
    <div className="mt-40 px-4">
      <h2 className="text-oceanBlue text-4xl font-bold my-auto items-center font-body sm:text-5xl">
        Latest News
      </h2>
      <div className="flex flex-col mt-8">
        {
          // Loop through posts
          posts.map((post, index) => (
            <div className="grid grid-cols-[1fr_2fr_1fr] mb-4">
              {/* <GatsbyImage image={} /> */}
              <p>
                {index < 10 ? `0${index + 1}` : index}
                .
              </p>
              <h2 className="flex flex-col">
                <span>{post.date}</span>
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
            gatsbyImage(height: 100)
          }
        }
      }
    }
  }
`;

export default news;
