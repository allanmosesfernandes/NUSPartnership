import React from "react";
import Fade from "react-reveal/Fade";
import NTSU from "../assets/images/home/NTSU.png";
import UON from "../assets/images/home/UON.png";
import X from "../assets/images/home/close-thick.svg";
import logo from "../assets/images/navbar/logo.png";

function Introduction() {
  return (
    <div className="container text-blue-900 py-20 relative flex flex-col space-y-5 mx-auto justify-center text-center items-center px-4  sm:w-[70%]">
      <Fade bottom>
        <img src={logo} alt="logo" className="md:w-[200px] w-[100px] mx-auto" />
        <p className="tracking-tight text-md font-body sm:text-xl">
          The Nottingham Students Partnership is a joint venture between the
          University of Nottingham Students’ Union and Nottingham Trent
          Students' Union to represent the interests of students in the City
          of Nottingham.
        </p>
        <p className="tracking-tight text-md font-body sm:text-xl">
          Our members make up about 1/7th of the City’s population, and our
          aim is that their involvement in the city is as proportional as they
          are, with us as their students’ unions providing our insight and
          their voice where we can.
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
  );
}

export default Introduction;
