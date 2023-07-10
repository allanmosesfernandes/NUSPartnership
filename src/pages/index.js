import * as React from "react";

function IndexPage() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="container flex flex-col space-y-5 mx-auto justify-center items-center mt-10 px-4 sm:mt-20 sm:w-4/5">
      <h2 className="text-oceanBlue text-6xl font-bold my-auto items-center font-body sm:text-8xl">
        Nottingham Students Partnership
      </h2>
      <p className="tracking-tight text-xl font-body sm:text-2xl">
        The Nottingham Students Partnership is a joint venture between the
        University of Nottingham Students’ Union and Nottingham Trent Students'
        Union to represent the interests of students in the City of Nottingham.
      </p>
      <p className="tracking-tight text-xl font-body sm:text-2xl">
        Our members make up about 1/7th of the City’s population, and our aim is
        that their involvement in the city is as proportional as they are, with
        us as their students’ unions providing our insight and their voice where
        we can.
      </p>
    </div>
  );
}

export default IndexPage;
