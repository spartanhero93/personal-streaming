import React from "react";

export default function Video(props){
  return (
    <video id="videoPlayer" width="50%" controls muted="muted" autoPlay>
      <source src='http://localhost:9000/test' type="video/mp4" />
    </video>
  )
}