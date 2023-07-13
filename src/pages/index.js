import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import presidentNTSU from "../images/people/PRESIDENT.jpg";
import communityNTSU from "../images/people/COMMUNITY.jpg";
import sportNTSU from "../images/people/SPORT.jpg";
import News from "../components/NewsWidget";

function IndexPage( { data }) {
  const roles = [
    {
      title: "UDO",
      people: [
        {
          image: presidentNTSU,
          name: "Anna O'Hara",
          role: "President NTSU",
        },
        {
          image: communityNTSU,
          name: " Jessica Nuttall",
          role: "Officer UoN SU",
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
        },
        {
          image: communityNTSU,
          name: "Peter Parker",
          role: "Vigilante",
        },
        // Add more people to this role
      ],
    },
    // Add more roles here
    {
      title: "Postgraduate",
      people: [
        {
          image: communityNTSU,
          name: "John Smith",
          role: "Community",
        },
        {
          image: communityNTSU,
          name: "Peter Parker",
          role: "Vigilante",
        },
        // Add more people to this role
      ],
    },
    {
      title: "Sport",
      people: [
        {
          image: sportNTSU,
          name: "Joddie",
          role: "VP Sport",
        },
        {
          image: communityNTSU,
          name: "Peter Parker",
          role: "Vigilante",
        },
        // Add more people to this role
      ],
    },
    {
      title: "Activities",
      people: [
        {
          image: communityNTSU,
          name: "Activity Smith",
          role: "Community",
        },
        {
          image: communityNTSU,
          name: "Peter Parker",
          role: "Spiderman",
        },
        // Add more people to this role
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
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <div className="container relative flex flex-col space-y-5 mx-auto justify-center items-center mt-40 px-4 sm:mt-60 sm:w-4/5">
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
        <div className="flex flex-col space-y-5 mt-32 p-4 md:p-12">
          <h2 className="text-oceanBlue text-5xl font-bold font-body sm:text-5xl text-left">
            People
          </h2>
          <p className="text-gray-700 text-2xl tracking-tight">
            Key people & Who to contact
          </p>
          <p className="text-lg w-full lg:w-[70%] lg:text-xl">
            For most enquiries, we would encourage reaching out to our
            partnership coordinator,
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
                      : "text-gray-500 text-lg font-bold lg:text-2xl"
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
                      : "text-gray-500 text-lg font-bold lg:text-2xl"
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
                      : "text-gray-500 text-lg font-bold lg:text-2xl"
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
                      : "text-gray-500 text-lg font-bold lg:text-2xl"
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
                      : "text-gray-500 text-lg font-bold lg:text-2xl"
                  }
                >
                  Activities
                </h4>
              </button>
            </div>
            {/* Right Side */}
            <div className="flex flex-col space-x-auto mt-6 lg:space-x-10 lg:flex-row">
              {roles[activeRoleIndex].people.map((people, index) => (
                <div className="flex flex-col space-y-2 text-center mx-auto" key={index}>
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
                  <p className="text-xl text-gray-500">{people.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* News */}
      <News data={data} />
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
            gatsbyImage(height: 200)
          }
        }
      }
    }
  }
`;

export default IndexPage;
