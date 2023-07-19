import React from 'react';
import { Link } from 'gatsby';
import illustration from "../assets/images/404.svg";

function PageNotFound() {
  return (
    <section className="mt-40 px-4">
      <div className="flex md:flex-row flex-col justify-around">
        {/* left */}
        <div className="flex flex-col md:w-[40%] w-full">
          <h2 className="my-2 text-oceanBlue text-6xl font-bold items-center font-body sm:text-8xl">
            404
          </h2>
          <p className="tracking-tight text-xl font-body sm:text-2xl">
            Whoops... the page you were looking for does not exist
          </p>
          <Link to="/" className="">
            <button
              className="uppercase font-semibold my-4 bg-blue-700 text-white py-4 px-14 hover:bg-blue-500"
              type="button"
            >
              Go back to homepage
            </button>
          </Link>
        </div>
        {/* right */}
        <div className="flex flex-col ">
          <img src={illustration} alt="404 illustration" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
