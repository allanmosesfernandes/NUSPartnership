import { graphql } from "gatsby";
import React from "react";

function SingleBlog({ pageContext, data }) {
  // Get the blog id from the pageContext
  const { id } = pageContext;
  // Get the data from the query
  const { title, content, date } = data.wpPost;
  // Render the blog data
  return (
    <div className="container mt-[150px] flex w-4/5 mx-auto font-body">
      <div className="">
        <h2 className="text-oceanBlue text-6xl mb-5">{title}</h2>
        <p className="text-lg italic font-bold mb-5">{date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="wp-content-img text-lg leading-9 flex flex-col gap-2 mb-[5rem]"
        />
      </div>
    </div>
  );
}

export const query = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;

export default SingleBlog;
