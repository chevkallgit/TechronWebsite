import React from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          id="main"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
    </>
  );
}
