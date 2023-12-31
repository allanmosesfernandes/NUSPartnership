import * as React from "react";
import { graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import { useEffect } from "react";
import { gsap } from "gsap";
import NewsWidget from "../components/NewsWidget";
import SEO from "../components/SEO";
import ShareImage from "../assets/images/share.png";
import SocialMedia from "../components/SocialMedia";
import asterik from "../assets/images/home/icons8-asterisk.svg";
import HomePageBanner from "../assets/images/background.png";
import Introduction from "../components/Introduction";

import Intro from "../components/intro";

import logo from "../assets/images/navbar/logo.png";
import People from "../components/People";

function IndexPage({ data }) {
	/* Animation bit that does the magic */
	const showHero = () => {
		const heroTitles = document.querySelectorAll(".hero_row_text > h1");
		const heroSubtitles = document.querySelectorAll(".hero_row_text > h4");
		const heroSeparators = document.querySelectorAll(".hero_row_separator");
		gsap.timeline({ defaults: { ease: "expo.out" } })
			.to(
				heroTitles,
				{
					duration: 1.75,
					y: 0,
					stagger: 0.055,
				},
				0
			)
			.to(
				heroSubtitles,
				{
					duration: 1,
					autoAlpha: 0,
					stagger: 0.055,
				},
				0
			)
			.to(
				heroSeparators,
				{
					duration: 1.75,
					width: "100%",
					stagger: 0.095,
				},
				0
			)
			.fromTo(
				".cell",
				{
					height: 0,
					scale: 0.5,
				},
				{
					duration: 1.25,
					height: "100%",
					scale: 1,
					stagger: 0.025,
					ease: "expo.inOut",
				},
				0.5
			);
	};
	/* Initial State of animation */
	const initHero = () => {
		const heroTitles = document.querySelectorAll(".hero_row_text > h1");
		const heroSubtitles = document.querySelectorAll(".hero_row_text > h4");
		const heroSeparators = document.querySelectorAll(".hero_row_separator");
		gsap.set(heroTitles, { y: "101%" });
		gsap.set(heroSubtitles, { autoAlpha: 0 });
		gsap.set(heroSeparators, { width: 0 });
		showHero();
	};

	useEffect(() => {
		initHero();
	}, []);

	return (
		// eslint-disable-next-line react/jsx-filename-extension
		<>
			<section className="hero h-screen">
				<div className="hero_wrapper">
					<div
						className="hero_media"
						data-rows="3"
					>
						{/* <figure className="hero_figure">
              <img src={HomePageBanner} alt="hero" />
            </figure> */}
					</div>
					<div className="hero_row">
						<div className="hero_row_text">
							<h1 className="md:text-9xl sm:text-8xl text-6xl">
								Nottingham
							</h1>
							<h4 className="opacity-0 md:hidden">Blossoms</h4>
						</div>
						<div className="hero_row_separator" />
					</div>
					<div className="hero_row">
						<div className="hero_row_text">
							<h4 className="opacity-0 hidden md:block">
								Blossoms
							</h4>
							<h1 className="md:text-9xl sm:text-8xl text-6xl md:ml-[0] ml-auto">
								Students
							</h1>
						</div>
						<div className="hero_row_separator" />
					</div>
					<div className="hero_row">
						<div className="hero_row_text">
							<h1 className="md:text-9xl sm:text-8xl text-6xl">
								Partnership
							</h1>
							<h4 className="opacity-0 md:hidden">Blossoms</h4>
						</div>
						<div className="hero_row_separator" />
					</div>
				</div>
			</section>
			<section>
				<Introduction />
			</section>
			{/* Who we are x People */}
			<People />
			{/* News Widget */}
			<NewsWidget data={data} />
		</>
	);
}

/*
export const query = graphql`
  query MyQuery {
    allWpPost(limit: 4) {
      nodes {
        date(formatString: "MMMM DD,YYYY")
        slug
        title
        id
        featuredImage {
          node {
            gatsbyImage(layout: FULL_WIDTH, height: 400, fit: CONTAIN)
          }
        }
      }
    }
  }
`;

*/
export default IndexPage;

export function Head() {
	return <SEO image={ShareImage} />;
}
