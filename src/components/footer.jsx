import React from "react";
import FooterLogoList from "./footerLogoList";
import FooterNav from "./footerNav";

const Footer = () => {
  return (
    <footer>
      <FooterLogoList />
      <hr />
      <h3 id="subscribe">Subscribe</h3>
      <h4 id="news">Get our latest news, tips and tricks</h4>
      <div className="submit-box">
        <input
          type="email"
          className="form-control"
          placeholder="E-mail*"
          id="email"
        />
        <button type="submit" className="btn btn-outline-dark">
          Submit
        </button>
      </div>
      <FooterNav />
      <li className="footer-item copyright">
        <a className="footer-link" href="#">
          © 2018 Enfold by Kriesi
        </a>
      </li>
    </footer>
  );
};

export default Footer;
