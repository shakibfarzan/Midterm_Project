import React from "react";

const NavLogo = ({ src, alt }) => {
  return (
    <span className="sm-logo">
      <img src={src} alt={alt} />
    </span>
  );
};

export default NavLogo;
