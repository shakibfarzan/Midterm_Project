import React from "react";

const Card = ({ title, text, imgUrl }) => {
  return (
    <div className="card">
      <div
        className="image-item"
        style={{ backgroundImage: "url(" + imgUrl + ")" }}
      ></div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
