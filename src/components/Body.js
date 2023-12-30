import React from "react";
import Menubar from "./Menubar";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";

function Body() {
  return (
    <div className=" bg-slate-950  ">
      <Menubar />
      <div className=" ml-[8%]">
        <PrimaryContainer />
        <SecondaryContainer />
      </div>
    </div>
  );
}

export default Body;
