import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../assets/images/navbar/logo.png";
import logoWhite from "../assets/images/navbar/logo-white.png";

function Navbar() {
  // Toggle Menu
  const [hamburger, setHamburger] = useState(false);

  const toggleMenu = () => {
    setHamburger(!hamburger);
  };
  const [navbarChange, setNavbarChange] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setNavbarChange(true);
    } else {
      setNavbarChange(false);
    }
  };
  /* Add event listener for detecting scroll change */
  window.addEventListener("scroll", changeColor);

  return (

    <nav className={`fixed font-body h-[10vh] left-0 right-0 top-0 z-[100] flex w-full p-[2rem] justify-between items-center mx-auto transition duration-500 ease 
    ${navbarChange ? "bg-oceanGreen" : "bg-transparent"}`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="logo" className="h-14" />
      </Link>

      <button
        className={hamburger ? "hamburger-icon open" : "hamburger-icon"}
        type="button"
        onClick={toggleMenu}
      >
        <span className="hamburger-top" />
        <span className="hamburger-middle" />
      </button>

      <div className={hamburger ? "menu__custom active" : "menu__custom"}>
        <div className="menu-items">
          <Link
            to="/about"
            className="block py-4 text-center menu-item"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/news"
            className="block py-4 text-center menu-item"
            onClick={toggleMenu}
          >
            News
          </Link>
          <Link
            to="/about"
            className="block py-4 text-center menu-item"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link
            to="/about"
            className="block py-4 text-center menu-item"
            onClick={toggleMenu}
          >
            Resources
          </Link>
          <div className="menu-background-pattern"> </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
