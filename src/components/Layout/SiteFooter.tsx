import { Link } from "react-router-dom";
import { COMPANY } from "../../lib/constants";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <img
              src={COMPANY.logoSrc}
              alt={`${COMPANY.name} logo`}
              style={{ maxHeight: 46, width: "auto" }}
            />
            <p>{COMPANY.tagline}</p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/policies">Policies</Link>
            <Link to="/#contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            <a href={`tel:${COMPANY.phoneE164}`}>{COMPANY.phoneDisplay}</a>
            <span>{COMPANY.location}</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</span>
          <span>Built with care in {COMPANY.location}</span>
        </div>
      </div>
    </footer>
  );
}
