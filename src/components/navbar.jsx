import React from "react";
import NavLogo from "./common/navbarLogo";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <NavLink to={"/homepage"} className="navbar-brand">
          <img
            id="logo"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/homepage"} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/about"} className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/blog"} className="nav-link">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/contact"} className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
          <NavLogo
            src={`${process.env.PUBLIC_URL}/images/twitter.png`}
            alt={"twitter"}
          />
          <NavLogo
            src={`${process.env.PUBLIC_URL}/images/dribbble.png`}
            alt={"dribbble"}
          />
          <NavLogo
            src={`${process.env.PUBLIC_URL}/images/instagram.png`}
            alt={"instagram"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
