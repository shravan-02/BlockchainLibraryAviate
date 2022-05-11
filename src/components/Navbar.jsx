import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../assets/bcLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img src={logo} className="w-16" />
          <h1 className="text-3xl font-bold mr-4 sm:text-xl">AVIATE.</h1>
          {/* Navbar Links */}
          <ul className="hidden md:flex">
            <li className="cursor-pointer px-4">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer px-4">
              <Link to="convert" smooth={true} offset={-120} duration={500}>
                Calculator
              </Link>
            </li>
            <li className="cursor-pointer px-4">
              <Link to="blog" smooth={true} offset={-80} duration={500}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
        {/* Sign In and Sign Up Buttons */}
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      {/* Dropdown Container */}
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
      <li className="border-b border-zinc-300 w-full cursor-pointer">
              <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="border-b border-zinc-300 w-full cursor-pointer">
              <Link onClick={handleClick} to="Convert" smooth={true} offset={-210} duration={500}>
                Calculator
              </Link>
            </li>
            <li className="border-b border-zinc-300 w-full cursor-pointer">
              <Link onClick={handleClick} to="blog" smooth={true} offset={-80} duration={500}>
                Blog
              </Link>
            </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
