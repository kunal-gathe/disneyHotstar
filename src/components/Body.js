import React from "react";
import { Outlet } from "react-router-dom";
import Menubar from "./Menubar";
import Footer from "./Footer";

function Body() {
  return (
    <div className=" bg-slate-950  ">
      <div className="">
        <div className="fixed z-50">
          <Menubar />
        </div>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Body;
