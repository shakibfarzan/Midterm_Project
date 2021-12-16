import React from "react";

const FooterNav = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="footer-item">
        <a className="footer-link" href="#">
          About
        </a>
      </li>
      <li className="footer-item">
        <a className="footer-link" href="#">
          Imprint
        </a>
      </li>
      <li className="footer-item">
        <a className="footer-link" href="#">
          Contact
        </a>
      </li>
      <li className="footer-item">
        <a className="footer-link " href="#">
          Privacy Policy
        </a>
      </li>
    </ul>
  );
};

export default FooterNav;
