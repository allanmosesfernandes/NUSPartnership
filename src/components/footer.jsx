import React from 'react';
import logo from "../assets/images/navbar/logo.png";
import { Link } from 'gatsby';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col font-body items-center mt-20 pt-10 space-y-10 border-t-[2px] border-gray-300">
      <img src={logo} alt="logo" className="h-20" />
      <div className="flex flex-row items-center space-x-12 font-body font-semibold lg:text-lg text-sm uppercase text-oceanBlue">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-500">
          About
        </Link>
        <Link to="/" className="hover:text-blue-500">
          People
        </Link>
        <Link to="/news" className="hover:text-blue-500">
          News
        </Link>
      </div>
      <p className="text-gray-500 text-sm pb-2">
        ©
        {year}
        {" "}
        All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
