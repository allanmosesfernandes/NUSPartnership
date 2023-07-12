import * as React from "react";
import { useState } from "react";
import presidentNTSU from "../images/PRESIDENT.jpg";
import communityNTSU from "../images/community.jpg";

function IndexPage() {
  const [isActive, setIsActive] = useState(true);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <div className="container relative flex flex-col space-y-5 mx-auto justify-center items-center mt-20 px-4 sm:mt-60 sm:w-4/5">
        <h2 className="text-oceanBlue text-6xl font-bold my-auto items-center font-body sm:text-8xl">
          Nottingham Students Partnership
        </h2>
        <p className="tracking-tight text-xl font-body sm:text-2xl">
          The Nottingham Students Partnership is a joint venture between the
          University of Nottingham Students’ Union and Nottingham Trent
          Students' Union to represent the interests of students in the City of
          Nottingham.
        </p>
        <p className="tracking-tight text-xl font-body sm:text-2xl">
          Our members make up about 1/7th of the City’s population, and our aim
          is that their involvement in the city is as proportional as they are,
          with us as their students’ unions providing our insight and their
          voice where we can.
        </p>
      </div>
      {/* Who we are */}
      <section id="who-we-are" className="font-body">
        <div className="flex flex-col space-y-5 mt-32 p-12">
          <h2 className="text-oceanBlue text-6xl font-bold font-body sm:text-5xl text-left">
            People
          </h2>
          <p className="text-gray-700 text-2xl tracking-tight">
            Key people & Who to contact
          </p>
          <p className="text-xl w-[70%]">
            For most enquiries, we would encourage reaching out to our
            Partnership Coordinator,
            <a
              className="underline text-oceanBlue hover:text-blue-500"
              href="mailto:Edward.Towers@nottingham.ac.uk"
            >
              Edward Towers
            </a>
            <br />
            but we’ve included some of our officers, and their areas of interest
            bellow to know who to contact about each area.
          </p>
          <div className="flex">
            {/* Left Side  */}
            <div className="flex flex-col space-y-10 mt-10 w-[25%]">
              <div className="flex flex-row gap-10 relative items-center mt-16">
                <svg
                  ariaHidden="true"
                  className="h-5 w-5 overflow-visible lg:block  stroke-blue-500 fill-transparent"
                  viewBox="0 0 6 6"
                >
                  <path
                    strokeLinejoin="round"
                    strokeWidth="0.5"
                    d="M3 0l3 3-3 3-3-3z"
                  />
                </svg>
                <h4 className="text-oceanBlue text-2xl font-bold">UDO/Pres</h4>
              </div>
              <div className="flex flex-row gap-10 relative items-center">
                <svg
                  ariaHidden="true"
                  className="h-5 w-5 overflow-visible lg:block  stroke-blue-500 fill-transparent"
                  viewBox="0 0 6 6"
                >
                  <path
                    strokeLinejoin="round"
                    strokeWidth="0.5"
                    d="M3 0l3 3-3 3-3-3z"
                  />
                </svg>
                <h4 className="text-oceanBlue text-2xl font-bold">Community</h4>
              </div>
              <div className="flex flex-row gap-10 relative items-center">
                <svg
                  ariaHidden="true"
                  className="h-5 w-5 overflow-visible lg:block  stroke-blue-500 fill-transparent"
                  viewBox="0 0 6 6"
                >
                  <path
                    strokeLinejoin="round"
                    strokeWidth="0.5"
                    d="M3 0l3 3-3 3-3-3z"
                  />
                </svg>
                <h4 className="text-oceanBlue text-2xl font-bold">
                  Postgraduate
                </h4>
              </div>
              <div className="flex flex-row gap-10 relative items-center">
                <svg
                  ariaHidden="true"
                  className="h-5 w-5 overflow-visible lg:block  stroke-blue-500 fill-transparent"
                  viewBox="0 0 6 6"
                >
                  <path
                    strokeLinejoin="round"
                    strokeWidth="0.5"
                    d="M3 0l3 3-3 3-3-3z"
                  />
                </svg>
                <h4 className="text-oceanBlue text-2xl font-bold">Sport</h4>
              </div>
            </div>
            {/* Right Side */}
            <div className="flex flex-row space-x-10 mt-10 ">
              <div className="flex flex-col space-y-2">
                <div className=" w-[200px] aspect-[4/5] rounded-lg">
                  <img
                    src={presidentNTSU}
                    className="p-2 h-full object-cover hover:scale-105 transform transition-all duration-500 ease-in-out rounded-lg"
                    alt="Anna O'Hara"
                  />
                </div>
                <h4 className="text- text-2xl text-gray-950 font-bold">
                  Anna O'Hara
                </h4>
                <p className="text-xl text-gray-500">President NTSU </p>
              </div>
              <div className="flex flex-col space-y-2">
                <div className=" w-[200px] aspect-[4/5] rounded-lg">
                  <img
                    src={communityNTSU}
                    className="p-2 h-full object-cover hover:scale-105 transform transition-all duration-500 ease-in-out rounded-lg"
                    alt="Anna O'Hara"
                  />
                </div>
                <h4 className="text- text-2xl text-gray-950 font-bold">
                  Community
                </h4>
                <p className="text-xl text-gray-500">Community </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndexPage;
