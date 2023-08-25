/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
/* eslint-disable */
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Pagination from "../components/pagination";

function News({ data, pageContext }) {
	// Fetch posts from WP
	const posts = data.allWpPost.nodes;
  console.log(posts);
	const  length  = posts.length;
	const { currentPage, postsPerPage, skip, totalPages } = pageContext;
	return (
		<div className="mt-40 px-4">
			<h2 className="text-oceanBlue text-4xl font-bold my-auto items-center font-body sm:text-5xl">
				Latest News
			</h2>
			<div className="flex flex-col mt-8">
				{
					// Loop through posts
					posts.map((post, index) => (
						<Link to={post.slug} key={post.id}>
							<div
								className={`cursor-pointer flex flex-col font-body grid-cols-1 gap-4 items-baseline md:items-center md:grid md:grid-cols-[1fr_2fr_1fr] w-full md:w-[80%] mx-auto mb-4 p-6`}
							>
								<p className="text-oceanBlue font-semibold">
									{index < 10 ? `0${index + 1 } ` : `${index + 1 }`}.
								</p>
								<div>
									<GatsbyImage
										image={post.featuredImage.node.gatsbyImage}
										alt="post"
										layout="constrained"
										objectFit="contain"
									/>
								</div>
								<h2 className="flex flex-col gap-4 font-semibold text-2xl text-blue-900">
									<span className="w-fit px-4 py-2 rounded-full border-slate-500 border-2 font-medium text-lg">
										{post.date}
									</span>
									{post.title}
								</h2>
							</div>
						</Link>
					))
				}
			</div>
			{/* Pagination */}
			{/* <Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				postsPerPage={pageContext.postsPerPage}
				skip={pageContext.skip}
				base="news"
			/> */}
		</div>
	);
}
export default News;
/* Gatsby Query for fetching news bits from backend */
/* This data is then passed as props to the NewsWidget */

export const query = graphql`
	query MyQuery($skip: Int = 0, $postsPerPage: Int = 4) {
		allWpPost(limit: $postsPerPage, skip: $skip) {
			nodes {
				date(formatString: "MMMM DD, YYYY")
				id
				slug
				title
				featuredImage {
					node {
						gatsbyImage(layout: CONSTRAINED, height: 200, fit: CONTAIN)
					}
				}
			}
		}
	}
`;
