import React from "react";
import Aside from "../Component/About/Aside";
import Content from "../Component/About/Content";

const About = () => {
  return (
    <div className="bg-white">
      <div id="main-wrapper" class=" flex">
        <Aside />
        <Content />
      </div>
    </div>
  );
};

export default About;
