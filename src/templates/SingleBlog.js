import { graphql } from 'gatsby';
import React from 'react'

function SingleBlog({ pageContext, data }) {
  // Get the blog id from the pageContext
  const { id } = pageContext;
  // Get the data from the query
  const { title, content, date } = data.wpPost;
  // Render the blog data
  return (
    <div className="mt-80">
      <h2>{title}</h2>
      <p className="text-sm">{date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;

export default SingleBlog;
