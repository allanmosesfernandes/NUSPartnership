import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../assets/images/navbar/logo.png";

function Navbar() {
  // Toggle Menu
  const [hamburger, setHamburger] = useState(false);

  const toggleMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <nav className="relative flex w-full p-2 justify-between items-center mx-auto md:w-4/5 md:p-2 md:my-4">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="logo" className="h-20" />
      </Link>
      {/* Menu */}
      <div className="hidden md:flex items-center space-x-8 font-body font-semibold text-lg uppercase text-oceanBlue">
        <Link to="/who-we-are" className="hover:text-blue-500">
          People
        </Link>
        <Link to="/what-we-do" className="hover:text-blue-500">
          News
        </Link>
        <Link to="/contact" className="hover:text-blue-500">
          Contact
        </Link>
      </div>
      <Link to="/about" className="hidden md:block">
        <button
          className="uppercase font-semibold rounded-xl bg-blue-700 text-white py-4 px-14 hover:bg-blue-500"
          type="button"
        >
          About
        </button>
      </Link>

      {/* Hamburger */}
      <button
        className={
          hamburger
            ? "hamburger-icon md:hidden"
            : "hamburger-icon open md:hidden"
        }
        type="button"
        onClick={toggleMenu}
      >
        <span className="hamburger-top" />
        <span className="hamburger-middle" />
      </button>

      <div
        className={
          hamburger
            ? "hidden"
            : "absolute left-0 right-0 mx-auto top-20 p-4 bg-white w-full h-screen drop-shadow-lg font-semibold"
        }
      >
        <Link to="/about" className="block py-4 text-center">
          About
        </Link>
        <Link to="/about" className="block py-4 text-center">
          News
        </Link>
        <Link to="/about" className="block py-4 text-center">
          Contact
        </Link>
        <Link to="/about" className="block py-4 text-center">
          Resources
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
