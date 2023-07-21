import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import SEO from "../components/SEO";

function SingleBlog({ pageContext, data }) {
  // Get the blog id from the pageContext
  const { id } = pageContext;
  // Get the data from the query
  // eslint-disable-next-line react/prop-types
  const {
    title, content, date, featuredImage,
  } = data.wpPost;
  // Render the blog data
  return (
    <>
      <GatsbyImage
        image={featuredImage.node.gatsbyImage}
        alt="placeholder"
        className="w-full h-[400px] object-cover md:h-[800px] mt-[90px] md:mt-[120px]"
      />
      <div className="container mt-[10px] flex flex-col w-full p-4 mx-auto font-body lg:w-4/5 lg:p-6">
        <div className="">
          <h2 className="text-oceanBlue text-2xl mb-5 lg:text-6xl">{title}</h2>
          <p className="line text-lg italic font-bold mb-5 flex pl-[35px] relative">
            {date}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className="wp-content-img text-lg leading-9 flex flex-col gap-2 mb-[5rem]"
          />
        </div>
      </div>
    </>
  );
}

export function Head({ data }) {
  return <SEO title={data.wpPost.title} />;
}

export const query = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          gatsbyImage(fit: COVER, height: 800, layout: FULL_WIDTH)
        }
      }
    }
  }
`;

export default SingleBlog;
