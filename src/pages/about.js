import React from 'react';
import OldMarket from "../assets/images/about/oldmarket.jpg";
import OldMarketGradient from "../assets/images/about/oldmarketG.png";

const about = () => (
  <section className="mt-40 px-4">
    {/* Section Wrapper */}
    <div className="flex flex-col md:flex-row gap-6 justify-between w-[95%] m-auto lg:w-[80%]">
      {/* Left Column */}
      <div className="flex flex-col gap-4 w-full md:w-[40%]">
        <h2 className="text-oceanBlue text-4xl font-bold my-auto font-body sm:text-5xl">
          About
        </h2>
        <p className="text-slate-500 font-body text-lg">
          Around 1/7th of the City’s population is represented by the University
          of Nottingham Students’ Union or Nottingham Trent Students’ Union,
          with our students sharing many of the same experiences and priorities
          regardless of which university they attend. On these areas, the two
          Students’ Unions , seeking to be an active part of the
        </p>
        <p className="text-slate-500 font-body text-lg">
          Whilst there has been some ad-hoc collaboration over the years, the
          Nottingham Students’ Partnership was formed in 2022 to create a more
          structured, dependable and strategic partnership, enabling us to build
          longer relationships with stakeholders across the City.
        </p>
      </div>
      {/* Right Column */}
      <div className="flex flex-col gap-4 justify-center items-center m-auto w-full md:w-[50%]">
        <img
          src={OldMarket}
          alt="Old Market Square"
          className="rounded-lg"
        />
      </div>
    </div>
    <div className="flex md:flex-row-reverse flex-col gap-6 justify-betweenw-[95%] m-auto lg:w-[80%] mt-10">
      {/* Left Column */}
      <div className="flex flex-col gap-4 w-full md:w-[50%]">
        <h2 className="text-oceanBlue text-4xl font-bold font-body sm:text-5xl">
          Our Vision
        </h2>
        <p className="text-slate-500 font-body text-lg">
          Around 1/7th of the City’s population is represented by the University
          of Nottingham Students’ Union or Nottingham Trent Students’ Union,
          with our students sharing many of the same experiences and priorities
          regardless of which university they attend. On these areas, the two
          Students’ Unions , seeking to be an active part of the
        </p>
        <p className="text-slate-500 font-body text-lg">
          Whilst there has been some ad-hoc collaboration over the years, the
          Nottingham Students’ Partnership was formed in 2022 to create a more
          structured, dependable and strategic partnership, enabling us to build
          longer relationships with stakeholders across the City.
        </p>
      </div>
      {/* Right Column */}
      <div className="flex flex-col gap-4 justify-center items-center w-full md:w-[50%]">
        <img
          src={OldMarketGradient}
          alt="Old Market Square"
          className="rounded-lg"
        />
      </div>
    </div>
  </section>
);

export default about;
