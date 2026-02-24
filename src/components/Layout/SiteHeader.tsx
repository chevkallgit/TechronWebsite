import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { COMPANY } from "../../lib/constants";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <NavLink to="/" aria-label={`${COMPANY.name} home`} onClick={close}>
            <img
              src={COMPANY.logoSrc}
              alt={`${COMPANY.name} logo`}
              className="logo2"
              loading="lazy"
            />
          </NavLink>
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav aria-label="Primary" className={open ? "open" : undefined}>
          <NavLink to="/" end onClick={close}>
            Home
          </NavLink>
          <NavLink to="/services" onClick={close}>Services</NavLink>
          <NavLink to="/policies" onClick={close}>Policies</NavLink>
          <Link to="/#contact" className="btn btn-sm" onClick={close}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
