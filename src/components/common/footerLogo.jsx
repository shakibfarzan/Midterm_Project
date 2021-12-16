import React from "react";
import ReactTooltip from "react-tooltip";

const FooterLogo = ({ src, alt, title }) => {
  return (
    <>
      <li data-tip={title} data-for={alt} className="logo-item">
        <img src={src} alt={alt} />
      </li>
      <ReactTooltip id={alt} type="dark" />
    </>
  );
};

export default FooterLogo;
