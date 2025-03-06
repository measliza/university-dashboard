import React from "react";
import logout from "../image/log-out.png";
import Header from "../Header";
import Banner from "./Banner";
import Introduction from "./Introduction/Introduction";

const Content = () => {
  return (
    <div class=" w-full page-wrapper overflow-hidden">
      <Header />
      <Banner />
      <Introduction />
    </div>
  );
};

export default Content;
