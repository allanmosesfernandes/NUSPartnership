import React from "react";
import { Link } from "gatsby";
import logo from "../assets/images/logos/NSPWHITE.png";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col font-body items-center mt-20 p-6 md:p-12 space-y-10 bg-nspNavy rounded-t-xl">
      <div className="w-full flex flex-col sm:flex-row font-body gap-4 items-center text-sm  text-oceanBlue">
        <img src={logo} alt="logo" className="h-14" />

        <div className="md:ml-auto flex md:gap-12 gap-4">
          <Link
            to="/"
            className="text-white hover:-translate-y-2 ease-linear duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:-translate-y-2 ease-linear duration-200"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-white hover:-translate-y-2 ease-linear duration-200"
          >
            Resources
          </Link>
          <Link
            to="/news"
            className="text-white hover:-translate-y-2 ease-linear duration-200"
          >
            News
          </Link>
        </div>
      </div>
      <p className="text-zinc-50 text-xs border-t-[1px] p-4 w-full text-center">
        ©Copyright {year}, All Rights Reserved{" "}
      </p>
    </footer>
  );
}

export default Footer;
