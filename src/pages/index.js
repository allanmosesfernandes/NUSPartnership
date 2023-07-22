import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import { useEffect } from "react";
import { gsap } from "gsap";
import presidentNTSU from "../images/people/PRESIDENT.jpg";
import communityNTSU from "../images/people/COMMUNITY.jpg";
import sportNTSU from "../images/people/SPORT.jpg";
import NewsWidget from "../components/NewsWidget";
import SEO from "../components/SEO";
import ShareImage from "../assets/images/share.png";
import SocialMedia from "../components/SocialMedia";
import asterik from "../assets/images/home/icons8-asterisk.svg";
import HomePageBanner from "../assets/images/background.png";

function IndexPage({ data }) {
  useEffect(() => {
    initHero();
  }, []);
    const showHero = () => {
      const heroTitles = document.querySelectorAll(".hero_row_text > h1");
      const heroSubtitles = document.querySelectorAll(".hero_row_text > h4");
      const heroSeparators = document.querySelectorAll(".hero_row_separator");
      gsap
        .timeline({ defaults: { ease: "expo.out" } })
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
            autoAlpha: 1,
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
      const initHero = () => {
        const heroTitles = document.querySelectorAll(".hero_row_text > h1");
        const heroSubtitles = document.querySelectorAll(".hero_row_text > h4");
        const heroSeparators = document.querySelectorAll(".hero_row_separator");

        gsap.set(heroTitles, { y: "101%" });
        gsap.set(heroSubtitles, { autoAlpha: 0 });
        gsap.set(heroSeparators, { width: 0 });
        showHero();
      };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <section className="hero">
      <div className="hero_wrapper">
        <div className="hero_media" data-rows="3">
          <figure className="hero_figure">
            <img src={HomePageBanner} alt="hero" />
          </figure>
        </div>
        <div className="hero_row">
          <div className="hero_row_text">
            <h1>Nottingham</h1>
            <h4 className="opacity-0">Blossoms</h4>
          </div>
          <div className="hero_row_separator" />
        </div>
        <div className="hero_row">
          <div className="hero_row_text">
            <h4 className="opacity-0">Blossoms</h4>
            <h1>Students</h1>
          </div>
          <div className="hero_row_separator" />
        </div>
        <div className="hero_row">
          <div className="hero_row_text">
            <h1>Partnership</h1>
            <h4 className="opacity-0">Blossoms</h4>
          </div>
          <div className="hero_row_separator" />
        </div>
      </div>
    </section>
  );
}
export const query = graphql`
  query MyQuery {
    allWpPost(limit: 3) {
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
export default IndexPage;

export function Head() {
  return <SEO image={ShareImage} />;
}
