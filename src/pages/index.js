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
import NTSU from "../assets/images/home/NTSU.png";
import UON from "../assets/images/home/UON.png";
import X from "../assets/images/home/close-thick.svg";

import Intro from "../components/intro";

import logo from "../assets/images/navbar/logo.png";
import People from "../components/People";

function IndexPage({ data }) {
  /* Animation bit that does the magic */
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
      <section>
        <div className="container text-blue-900 mt-60 mb-30 relative flex flex-col space-y-5 mx-auto justify-center text-center items-center px-4  sm:w-[70%]">
          <Fade bottom>
            <img src={logo} alt="logo" className="w-[200px] mx-auto" />
            <p className="tracking-tight text-xl font-body sm:text-2xl">
              The Nottingham Students Partnership is a joint venture between the
              University of Nottingham Students’ Union and Nottingham Trent
              Students' Union to represent the interests of students in the City
              of Nottingham.
            </p>
            <p className="tracking-tight text-xl font-body sm:text-2xl">
              Our members make up about 1/7th of the City’s population, and our
              aim is that their involvement in the city is as proportional as
              they are, with us as their students’ unions providing our insight
              and their voice where we can.
            </p>
            <div className="flex flex-row space-x-5 items-center">
              <a
                href="https://www.trentstudents.org/"
                target="_blank"
                rel="noreferrer"
                title="NTSU"
              >
                <img src={NTSU} className="h-[50px]" alt="NTSU" />
              </a>
              <img src={X} alt="asterik" className="h-[30px]" />
              <a
                href="https://su.nottingham.ac.uk/"
                target="_blank"
                rel="noreferrer"
                title="UON SU"
              >
                <img src={UON} alt="UON" className="h-[100px]" />
              </a>
            </div>
          </Fade>
        </div>
      </section>
      <People />
    </>
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
