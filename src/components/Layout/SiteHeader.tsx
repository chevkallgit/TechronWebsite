import React from "react";
import { NavLink } from "react-router-dom";
import { COMPANY } from "../../lib/constants";

export default function SiteHeader() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <NavLink to="/" aria-label={`${COMPANY.name} home`}>
            <img
              src={COMPANY.logoSrc}
              alt={`${COMPANY.name} logo`}
              className="logo2"
              loading="lazy"
            />
          </NavLink>
        </div>

        <nav aria-label="Primary">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/policies">Policies</NavLink>
          <a href="#contact" className="btn btn-sm">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
