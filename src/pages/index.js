import * as React from "react";

function IndexPage() {
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
            Who we are
          </h2>
          <p className="text-gray-700 text-2xl">Key people & Who to contact</p>
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
        </div>
      </section>
    </>
  );
}

export default IndexPage;
