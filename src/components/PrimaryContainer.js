import React from "react";
import VideoBackground from "./VideoBackground";
import Info from "./Info";

function PrimaryContainer({title,id,overview}) {
  return (
    <div>
      <VideoBackground id={id} />
      <Info title={title} description={overview} />
    </div>
  );
}

export default PrimaryContainer;
