import React, { useState } from "react";
import { LOGO } from "../utils/constatnt";
import User from "../images/icons/circle-user (1).png";
import Search from "../images/icons/search.png";
import Home from "../images/icons/house-chimney.png";
import Tv from "../images/icons//screen.png";
import Sport from "../images/icons/tennis.png";
import Category from "../images/icons//category.png";
import { Link } from "react-router-dom";

function Menubar() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="pl-4  h-screen relative hover:w-[30rem] hover:bg-gradient-to-r hover:from-gray-950 to-transparent z-50">
      <div className="flex flex-col ">
        <Link to='/'> <img className="w-12 mt-8 ml-2 cursor-pointer " src={LOGO} alt="logo" />
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
        <ul className="ml-6 hover:w-32">
          <li className="  items-center">
            {" "}
            <img
              className="my-12 w-5 cursor-pointer "
              src={User}
              alt="userImg"
            />
            {visible && (
              <p
                id="user"
                className="text-white text-xl  mx-4 absolute -mt-[70px] ml-12 w-full hover:text-2xl font-bold cursor-pointer"
              >
               <Link to='login'>My Space</Link>
              </p>
            )}
          </li>
          <li>
            {" "}
            <img
              className="my-12 w-5 cursor-pointer"
              src={Search}
              alt="userImg"
            />
            {visible && (
              <p
                id="user"
                className="text-white text-xl  mx-4 absolute -mt-[70px] ml-12 w-full hover:text-2xl font-bold cursor-pointer"
              >
               <Link to='search'> Search</Link>
              </p>
            )}
          </li>
          <li>
            <img
              className="my-12 w-5 cursor-pointer"
              src={Home}
              alt="userImg"
            />
          </li>
          {visible && (
            <p
              id="user"
              className="text-white text-xl  mx-4 absolute -mt-[70px] ml-12 w-full hover:text-2xl font-bold cursor-pointer"
            >
              <Link to='/'>Home</Link>
            </p>
          )}
          <li>
            <img className="my-12 w-5 cursor-pointer" src={Tv} alt="userImg" />
            {visible && (
              <p
                id="user"
                className="text-white text-xl  mx-4 absolute -mt-[70px] ml-12 w-full hover:text-2xl font-bold cursor-pointer"
              >
                Tv
              </p>
            )}
          </li>
          <li>
            <img
              className="my-12 w-5 cursor-pointer"
              src={Sport}
              alt="userImg"
            />
            {visible && (
              <p
                id="user"
                className="text-white text-xl  mx-4 absolute -mt-[70px] ml-12 w-full hover:text-2xl font-bold cursor-pointer"
              >
                Sport
              </p>
            )}
          </li>
          <li>
            <img
              className="my-12 w-5 cursor-pointer"
              src={Category}
              alt="userImg"
            />
            {visible && (
              <p
                id="user"
                className="text-white text-xl  mx-4 absolute -mt-[70px] ml-12 w-full hover:text-2xl font-bold cursor-pointer"
              >
                Category
              </p>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menubar;
