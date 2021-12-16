import React from "react";
import NavLogo from "./common/navbarLogo";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            id="logo"
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
          />
        </a>
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
              <a className="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Contact</a>
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
