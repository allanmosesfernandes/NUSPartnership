import React, { useState } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import logo from "../assets/images/logos/NSPWHITE.png";

function Navbar() {
  // Toggle Menu
  const [hamburger, setHamburger] = useState(false);
  const toggleMenu = () => {
    setHamburger(!hamburger);
  };
  const [navbarChange, setNavbarChange] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const changeColor = () => {
    if (window.scrollY >= 80) {
      setNavbarChange(true);
    } else {
      setNavbarChange(false);
    }
  };
  /* Add event listener for detecting scroll change */
  window.addEventListener("scroll", changeColor);

  return(
		<nav
			className={`fixed font-body left-0 right-0 top-0 z-[100] flex w-full px-6 py-3 justify-between items-center mx-auto transition duration-500 ease 
        ${
					isHomePage
						? navbarChange
							? "bg-oceanGreen"
							: "bg-transparent"
						: "bg-oceanGreen"
				}`}
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
  <div className="menu-background-pattern" />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
