import React from "react";

const ProgressBar = ({ progress, title }) => {
  return (
    <>
      <p className="progress-title">{title}</p>
      <div className="progress" style={{ height: "5px" }}>
        <div
          className="progress-bar"
          style={{
            width: progress,
            height: "5px",
            backgroundColor: "black",
          }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
