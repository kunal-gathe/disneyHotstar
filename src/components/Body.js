import React from "react";
import { Outlet } from "react-router-dom";
import Menubar from "./Menubar";
import Footer from "./Footer";

function Body() {
  return (
    <div className=" bg-slate-950  ">
      <div className="">
        <div className="fixed  top-[30rem] z-50 bg-gray-950">
          <Menubar />
        </div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Body;
