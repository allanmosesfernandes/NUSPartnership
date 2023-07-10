import React from "react";
import { Link } from "gatsby";
import logo from "../assets/images/navbar/logo.png";

function Navbar() {
  return (
    <nav className="relative flex w-full p-2 justify-between items-center mx-auto md:w-4/5 md:p-2 md:my-4">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="logo" className="h-20" />
      </Link>
      {/* Menu */}
      <div className="hidden md:flex items-center space-x-8 font-body font-semibold text-lg uppercase text-oceanBlue">
        <Link to="/who-we-are">People</Link>
        <Link to="/what-we-do">News</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Link to="/about" className="hidden md:block">
        <button
          className="uppercase font-semibold rounded-xl bg-blue-700 text-white py-4 px-14 hover:bg-blue-500"
          type="button"
        >
          About
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
