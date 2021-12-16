import React from "react";
import Content from "./common/content";
import Gallery from "./gallery";
const Homepage = (props) => {
  return (
    <>
      <Content>
        Hi! I am Max and this is my portfolio. I can help you build a Don’t be
        shy, get in touch!
      </Content>
      <Gallery />
    </>
  );
};

export default Homepage;
