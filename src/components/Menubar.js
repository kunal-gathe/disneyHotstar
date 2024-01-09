import React, { useState } from "react";
import { LOGO } from "../utils/constatnt";
import User from "../images/icons/circle-user (1).png";
import Search from "../images/icons/search.png";
import Home from "../images/icons/house-chimney.png";
import Tv from "../images/icons//screen.png";
import Category from "../images/icons//category.png";
import { Link } from "react-router-dom";

function Menubar() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="pl-4 md:pl-8  h-screen relative hover:w-[30rem] hover:bg-gradient-to-r hover:from-gray-950 to-transparent z-50 md:absolute md:-top-[30rem]">
      <div className="md:flex flex-col hidden">
        <Link to="/">
          {" "}
          <img
            className="w-12 mt-8 ml-2 md:w-12 cursor-pointer  "
            src={LOGO}
            alt="logo"
          />
        </Link>
        <button className="bg-yellow-700/50 w-20 opacity-80 my-2 rounded-lg text-white text-xs">
          Subscribe &gt;
        </button>
      </div>
      <div
        className="w-full"
        onMouseOver={() => {
          setVisible(true);
        }}
        onMouseLeave={() => {
          setVisible(false);
        }}
      >
        <ul className="ml-1 md: md:ml-6 hover:w-32 flex mt-2  md:flex-col  ">
          <li className="  items-center">
            <Link to="login">
              <img
                className="md:my-12 w-5  cursor-pointer mr-20 md:mb-0 "
                src={User}
                alt="userImg"
              />
              {visible && (
                <p
                  id="user"
                  className="text-white text-xl hidden md:block md:-mt-6  mx-4 absolute -mt-[70px] ml-12 w-full hover:text-2xl font-bold cursor-pointer"
                >
                  My Space
                </p>
              )}
            </Link>
          </li>
          <li>
            <Link to="search">
              <img
                className="md:my-12 w-5 cursor-pointer md:mb-0 mr-20"
                src={Search}
                alt="userImg"
              />
              {visible && (
                <p
                  id="user"
                  className="text-white text-xl md:-mt-6  hidden md:block  mx-4 absolute -mt-[70px] ml-12 w-full hover:text-2xl font-bold cursor-pointer"
                >
                  Search
                </p>
              )}
            </Link>
          </li>
          <li>
            <Link to="/">
              <img
                className="md:my-12 w-5 cursor-pointer mr-20 md:mb-0"
                src={Home}
                alt="userImg"
              />
              {visible && (
                <p
                  id="user"
                  className="text-white text-xl md:-mt-6  hidden md:block mx-4 absolute -mt-[70px] ml-12 w-full hover:text-2xl font-bold cursor-pointer"
                >
                  Home
                </p>
              )}
            </Link>
          </li>
          <li>
            <Link to="tv">
              <img
                className="md:my-12 w-5 cursor-pointer mr-20 md:mb-0"
                src={Tv}
                alt="userImg"
              />
              {visible && (
                <p
                  id="user"
                  className="text-white text-xl md:-mt-6  hidden md:block  mx-4 absolute -mt-[70px] ml-12 w-full hover:text-2xl font-bold cursor-pointer"
                >
                  Tv
                </p>
              )}
            </Link>
          </li>
          <li>
            <Link to="category">
              <img
                className="md:my-12 w-5 cursor-pointer mr-20"
                src={Category}
                alt="userImg"
              />
              {visible && (
                <p
                  id="user"
                  className="text-white text-xl   hidden md:block mx-4 absolute -mt-[70px] ml-12 w-full hover:text-2xl font-bold cursor-pointer"
                >
                  Category
                </p>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menubar;
