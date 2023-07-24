import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Fade from "react-reveal/Fade";
import Right from "../assets/images/home/slide-up.svg";

// eslint-disable-next-line import/no-duplicates

function NewsWidget(props) {
  // Hook for querying data
  const posts = props.data.allWpPost.nodes;
  return (
    <section className="mt-20">
      <Fade bottom>
        <h2 className="px-10 py-8 text-stone-50 text-3xl font-bold font-body sm:text-6xl text-left bg-oceanBlue">
          Latest News{" "}
        </h2>
      </Fade>
      <div className="flex flex-col space-y-10 p-4 md:p-12 font-body ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <Link to={`news/${post.slug}`} key={post.id}>
              <div className="relative flex flex-col  news-card h-[100%] shadow-glossy bg-white  cursor-pointer hover:shadow-box hover:shadow-stone-50">
                <div className="relative">
                  <GatsbyImage
                    image={post.featuredImage.node.gatsbyImage}
                    alt="post"
                    className="h-[300px] post__image shadow-box shadow-stone-50 "
                  />
                </div>
                <div className="text-oceanBlue bg-white post__title p-6 flex flex-col space-between space-y-6  min-h-[100px] relative">
                  <p className="font-body sm:text-md text-left ">
                    {post.title}
                  </p>
                </div>
                <Link
                  to={`news/${post.slug}`}
                  className="p-6 bg-oceanBlue text-stone-50 latest_news_link w-full flex items-center font-bold"
                >
                  Read Article
                  <span>
                    <img src={Right} alt="right" className="rotate-90 inline ml-2 w-[15px] mb-1" />{" "}
                  </span>
                </Link>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/news" className="mx-auto ">
          <button
            className="uppercase border-2 border-text-stone font-semibold rounded-sm bg-oceanBlue text-stone-50 py-4 px-14 hover:bg-stone-50 hover:text-oceanBlue w-fit mx-auto shadow-box shadow-stone-50 shadow-4xl transition duration-150 ease-in hover:ease-in"
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
