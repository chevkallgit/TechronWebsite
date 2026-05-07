import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { COMPANY } from "../../lib/constants";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleContact = () => {
    close();
    if (location.pathname === "/") {
      // Already on homepage — just scroll
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate home first, then scroll after the page transition finishes
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <div className="nav-inner">
          {/* Brand */}
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

          {/* Desktop nav */}
          <nav className="nav-links" aria-label="Primary">
            <NavLink to="/" end onClick={close}>Home</NavLink>
            <NavLink to="/services" onClick={close}>Services</NavLink>
            <NavLink to="/policies" onClick={close}>Policies</NavLink>
            <button className="btn btn-sm" onClick={handleContact}>
              Contact
            </button>
          </nav>

          {/* Hamburger */}
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              className="mobile-menu"
              aria-label="Mobile navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              <NavLink to="/" end onClick={close}>Home</NavLink>
              <NavLink to="/services" onClick={close}>Services</NavLink>
              <NavLink to="/policies" onClick={close}>Policies</NavLink>
              <button className="btn" onClick={handleContact}>
                Get a Free Consult
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
