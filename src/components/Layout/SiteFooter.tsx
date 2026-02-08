import React from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "../../lib/constants";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
        <div className="footer-links">
          <Link to="/policies">Policies</Link>
          <span>•</span>
          <Link to="/services">Services</Link>
        </div>
      </div>
    </footer>
  );
}
