import { graphql, useStaticQuery } from "gatsby";
import React from "react";

function SEO({ title, description, image }) {
  // Using static query fetch site metadata
  const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
                description
                siteUrl
            }
        }
    }
    `);
    // Destructure site metadata
  const { siteMetadata } = data.site;
  // Set default values for title, description and image
  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    image: `${image || "../images/share.png"}`,
  };

  return (
    <>
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {/* Favicon */}
      <link rel="icon" href="../images/favicon/favicon.ico" />
    </>
  );
}

export default SEO;
