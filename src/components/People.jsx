import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import presidentNTSU from "../assets/images/people/PRESIDENT.jpg";
import communityNTSU from "../assets/images/people/COMMUNITY.jpg";
import SportNTSU from "../assets/images/people/SPORT.jpg";
import EmailLogo from "../assets/images/home/email.svg";

function People() {
  /* Update roles or people in the JSON below */
  const people = [
    {
      title: "UDO",
      people: [
        {
          image: presidentNTSU,
          name: "Anna O'Hara",
          role: "President NTSU",
          email: "anna.ohara@su.ntu.ac.uk",
        },
        {
          image: communityNTSU,
          name: " Jessica Nuttall",
          role: "Officer UoN SU",
          email: "jessica.nutall@uon.ntu.ac.uk",
        },
        // Add more people to this role
      ],
    },
    {
      title: "Community",
      people: [
        {
          image: communityNTSU,
          name: "John Smith",
          role: "Community",
          email: "anna.ohara@su.ntu.ac.uk",
        },
        {
          image: communityNTSU,
          name: "Peter Parker",
          role: "Vigilante",
          email: "anna.ohara@su.ntu.ac.uk",
        },
        // Add more people to this role
      ],
    },
    // Add more roles here on the outer array
    {
      title: "Postgraduate",
      people: [
        {
          image: communityNTSU,
          name: "John Smith",
          role: "Community",
          email: "anna.ohara@su.ntu.ac.uk",
        },
      ],
    },
    {
      title: "Sports",
      people: [
        {
          image: SportNTSU,
          name: "Joddie Smith",
          role: "Community",
          email: "anna.ohara@su.ntu.ac.uk",
        },
      ],
    },
    {
      title: "Activities",
      people: [
        {
          image: SportNTSU,
          name: "John Smith",
          role: "Community",
          email: "anna.ohara@su.ntu.ac.uk",
        },
      ],
    },
  ];
  /* Toggle Visible States between roles */
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  /* Pass the index of the role as argument */
  const handleRoleClick = (index) => {
    setActiveRoleIndex(index);
  };
  return (
    <section id="who-we-are" className="font-body">
      <div className="flex flex-col space-y-5 p-4 md:p-12">
        <Fade bottom>
          <h2 className="text-oceanBlue text-5xl font-bold font-body sm:text-5xl text-left">
            People
          </h2>
        </Fade>
        <div className="text-blue-900 flex flex-col space-y-5">
          <p className="text-gray-600 text-2xl tracking-tight font-semibold">
            Key people & who to contact
          </p>
          <p className="text-xl w-full lg:w-[70%]">
            For most enquiries, we would encourage reaching out to our{" "}
            <a
              className="underline font-bold text-blue-900 hover:text-blue-500"
              href="mailto:Edward.Towers@nottingham.ac.uk"
            >
              partnership coordinator,
            </a>
            <br />
            but we’ve included some of our officers, and their areas of interest
            below to know who to contact about each area.
          </p>
          <div className="flex flex-col mt-20 lg:flex-row">
            {/* Left Side  */}
            <div className="relative z-5 flex flex-row flex-wrap align-center border-b-[1px] border-sky-600 pb-4 gap-4 space-y-2 w-full lg:flex-col lg:w-[25%] justify-center lg:space-y-16 lg:border-0 lg:pb-0">
              {/* Line */}
              <div className="absolute top-[20px] left-[10px] w-[0.2px] h-full bg-slate-600 hidden lg:block" />
              {/* UDO / Pres */}
              <button
                type="button"
                tabIndex={0}
                className="flex flex-row gap-2 relative items-center lg:gap-10"
                key={0}
                onClick={() => handleRoleClick(0)}
              >
                <svg
                  viewBox="0 0 6 6"
                  className={
                    activeRoleIndex === 0
                      ? "h-5 w-5 overflow-visible lg:block  stroke-blue-500 fill-blue-500"
                      : "h-5 w-5 overflow-visible lg:block  stroke-blue-500 fill-transparent"
                  }
                >
                  <path
                    strokeLinejoin="round"
                    strokeWidth="0.5"
                    d="M3 0l3 3-3 3-3-3z"
                  />
                </svg>
                <h4
                  className={
                    activeRoleIndex === 0
                      ? "text-oceanBlue text-lg font-bold lg:text-2xl"
                      : "text-gray-600 text-lg font-bold lg:text-2xl"
                  }
                >
                  UDO
                </h4>
              </button>
              <button
                type="button"
                tabIndex={0}
                className="flex flex-row gap-2 relative items-center lg:gap-10"
                key={1}
                onClick={() => handleRoleClick(1)}
              >
                <svg
                  className={
                    activeRoleIndex === 1
                      ? "h-5 w-5 overflow-visible lg:block  stroke-blue-500 fill-blue-500"
                      : "h-5 w-5 overflow-visible lg:block  stroke-blue-500 fill-transparent"
                  }
                  viewBox="0 0 6 6"
                >
                  <path
                    strokeLinejoin="round"
                    strokeWidth="0.5"
                    d="M3 0l3 3-3 3-3-3z"
                  />
                </svg>
                <h4
                  className={
                    activeRoleIndex === 1
                      ? "text-oceanBlue text-lg font-bold lg:text-2xl"
                      : "text-gray-600 text-lg font-bold lg:text-2xl"
                  }
                >
                  Community
                </h4>
              </button>
              <button
                type="button"
                tabIndex={0}
                className="flex flex-row gap-2 relative items-center lg:gap-10"
                key={2}
                onClick={() => handleRoleClick(2)}
              >
                <svg
                  className={
                    activeRoleIndex === 2
                      ? "h-5 w-5 overflow-visible lg:block  stroke-blue-500 fill-blue-500"
                      : "h-5 w-5 overflow-visible lg:block  stroke-blue-500 fill-transparent"
                  }
                  viewBox="0 0 6 6"
                >
                  <path
                    strokeLinejoin="round"
                    strokeWidth="0.5"
                    d="M3 0l3 3-3 3-3-3z"
                  />
                </svg>
                <h4
                  className={
                    activeRoleIndex === 2
                      ? "text-oceanBlue text-lg font-bold lg:text-2xl"
                      : "text-gray-600 text-lg font-bold lg:text-2xl"
                  }
                >
                  Postgraduate
                </h4>
              </button>
              <button
                type="button"
                tabIndex={0}
                className="flex flex-row gap-2 relative items-center lg:gap-10"
                key={3}
                onClick={() => handleRoleClick(3)}
              >
                <svg
                  className={
                    activeRoleIndex === 3
                      ? "h-5 w-5 overflow-visible lg:block  stroke-blue-500 fill-blue-500"
                      : "h-5 w-5 overflow-visible lg:block  stroke-blue-500 fill-transparent"
                  }
                  viewBox="0 0 6 6"
                >
                  <path
                    strokeLinejoin="round"
                    strokeWidth="0.5"
                    d="M3 0l3 3-3 3-3-3z"
                  />
                </svg>
                <h4
                  className={
                    activeRoleIndex === 3
                      ? "text-oceanBlue text-lg font-bold lg:text-2xl"
                      : "text-gray-600 text-lg font-bold lg:text-2xl"
                  }
                >
                  Sport
                </h4>
              </button>
              <button
                type="button"
                tabIndex={0}
                className="flex flex-row gap-2 relative items-center lg:gap-10"
                key={4}
                onClick={() => handleRoleClick(4)}
              >
                <svg
                  className={
                    activeRoleIndex === 4
                      ? "h-5 w-5 overflow-visible lg:block  stroke-blue-500 fill-blue-500"
                      : "h-5 w-5 overflow-visible lg:block  stroke-blue-500 fill-transparent"
                  }
                  viewBox="0 0 6 6"
                >
                  <path
                    strokeLinejoin="round"
                    strokeWidth="0.5"
                    d="M3 0l3 3-3 3-3-3z"
                  />
                </svg>
                <h4
                  className={
                    activeRoleIndex === 4
                      ? "text-oceanBlue text-lg font-bold lg:text-2xl"
                      : "text-gray-600 text-lg font-bold lg:text-2xl"
                  }
                >
                  Activities
                </h4>
              </button>
            </div>
            {/* Right Side */}
            <div className="flex flex-col gap-6 space-x-auto mt-6 lg:space-x-10 md:flex-row">
              {people[activeRoleIndex].people.map((people, index) => (
                <div
                  className="flex flex-col space-y-2 items-center text-center mx-auto"
                  key={index}
                >
                  <div className=" w-[250px] aspect-[4/5]">
                    <img
                      src={people.image}
                      className="rounded-[20px] p-2 h-full object-cover hover:scale-105 transform transition-all duration-500 ease-in-out"
                      alt="Anna O'Hara"
                    />
                  </div>
                  <h4 className="text- text-2xl text-gray-950 font-bold">
                    {people.name}
                  </h4>
                  <p className="text-xl text-gray-600" title="Click to copy">{people.people}</p>
                  <p className="text-md text-gray-600">
                    <img src={EmailLogo} className="inline-block h-6" alt="email" />{" "}
                    {people.email}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default People;
