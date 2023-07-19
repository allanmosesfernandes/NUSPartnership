import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
// eslint-disable-next-line import/no-duplicates

function NewsWidget(props) {
  // Hook for querying data
  const posts = props.data.allWpPost.nodes;
  return (
    <section>
      <div className="flex flex-col space-y-10 mt-20 p-4 md:p-12 font-body bg-oceanBlue">
        <h2 className="text-stone-50 text-3xl font-bold font-body sm:text-5xl text-left">
          Latest News
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link to={`news/${post.slug}`} key={post.id}>
              <div className="flex flex-col space-y-2 h-full bg-white rounded-br-[50px] cursor-pointer hover:shadow-box hover:shadow-stone-50">
                <div>
                  <GatsbyImage
                    image={post.featuredImage.node.gatsbyImage}
                    alt="post"
                    className="h-[300px] rounded-md shadow-box shadow-stone-50"
                  />
                </div>
                <div className="p-6 flex flex-col space-between space-y-6">
                  <p>{post.date}</p>
                  <h3 className="text-oceanBlue text-lg font-bold font-body sm:text-xl text-left">
                    {post.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/news" className="mx-auto mt-4">
          <button
            className="uppercase border-2 border-text-stone font-semibold rounded-sm bg-oceanBlue text-stone-50 py-4 px-14 hover:bg-stone-50 hover:text-oceanBlue w-fit mx-auto mt-10 shadow-box shadow-stone-50 shadow-4xl transition duration-150 ease-in hover:ease-in"
            type="button"
          >
            Read more
          </button>
        </Link>
      </div>
    </section>
  );
}

export default NewsWidget;
