import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
// eslint-disable-next-line import/no-duplicates

function NewsWidget() {
  /* Fetch News from wordpress backend */
  return (
    <section>
      <div className="flex flex-col space-y-5 mt-20 p-4 md:p-12">
        <h2 className="text-oceanBlue text-5xl font-bold font-body sm:text-5xl text-left">
          Latest News
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {/* {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col space-y-2 h-full shadow-2xl"
            >
              <h3 className="text-oceanBlue text-xl font-bold font-body sm:text-xl text-left">
                {post.title}
              </h3>
            </div>
          ))} */}
        </div>
        <Link to="/news" className="mx-auto mt-4">
          <button
            className="uppercase border-2 border-text-stone font-semibold rounded-sm bg-oceanBlue text-stone-50 py-4 px-14 hover:bg-stone-50 hover:text-oceanBlue w-fit mx-auto mt-10 shadow-box shadow-stone-50"
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
