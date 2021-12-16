import React from "react";

const Content = (props) => {
  return (
    <div className="content">
      <h1>{props.children}</h1>
    </div>
  );
};

export default Content;
