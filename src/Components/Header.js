import React from "react";
import logo from "../assets/images/lyft_logo.PNG";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="w-full h-20 bg-customBlue flex justify-between items-center lg:px-14 sm:px-10 flex-wrap">
      <div className="lg:w-1/3 md:w-2/5 sm:w-2/6 h-20 flex justify-center items-center">
        <div className="lg:w-56 sm:w-52 h-20 bg-customWhite flex justify-center items-center">
          <img className="w-22 h-16" src={logo} alt="lyft-logo" />
        </div>
      </div>
      <div className="h-20 lg:w-2/3 md:w-3/5 sm:w-4/6 pr-6 flex justify-end items-center">
        <ul className="list-none flex gap-10 lg:text-xl md:text-lg font-montserrat text-customWhite font-bold">
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="waiting-list">Waiting List</Link>
          </li>
          <button className="lg:w-44 md:w-44 h-10 px-4 flex justify-center items-center bg-customPink text-customBlack rounded-lg lg:text-lg md:text-sm sm:text-xs">
            <Link to="contacts">CONTACT US</Link>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
