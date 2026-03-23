/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useRef } from "react";
import "./nav.css";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { Logo } from "../../public/images";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
        <Link href="/" className="nav-logo-link">
          <img
            className="nav-logo"
            src={Logo?.src ?? Logo}
            alt="Citadel Meds"
          />
        </Link>

        <div className="nav-links">
          <div className="nav-links__services" ref={servicesRef}>
            <button
              type="button"
              className="nav-links__trigger"
              onClick={(e) => {
                e.stopPropagation();
                setServicesOpen((prev) => !prev);
              }}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
            </button>
            <div
              className={`nav-dropdown ${servicesOpen ? "nav-dropdown--open" : ""}`}
              role="menu"
            >
              <Link
                href="/healthcare-staffing"
                className="nav-dropdown__item"
                role="menuitem"
                onClick={() => setServicesOpen(false)}
              >
                Healthcare Staffing
              </Link>
              <div className="nav-dropdown__separator" aria-hidden="true" />
              <Link
                href="/clinical-cleaning"
                className="nav-dropdown__item"
                role="menuitem"
                onClick={() => setServicesOpen(false)}
              >
                Clinical Cleaning
              </Link>
            </div>
          </div>
          <Link href="/compliance">Compliance</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div className="nav-buttons">
          <Link href="tel:07310086696" className="nav-button">
            <FiPhone />
            <p>07310 086 696</p>
          </Link>
          <Link
            href="mailto:info@citadelmeds.co.uk"
            className="nav-button nav-button--primary"
          >
            Request Staff Now
          </Link>
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile / tablet slide-down menu */}
      <div
        className={`nav-mobile-menu ${menuOpen ? "nav-mobile-menu--open" : ""}`}
      >
        <div className="nav-mobile-menu__links">
          <span className="nav-mobile-menu__label">Services</span>
          <Link href="/healthcare-staffing" onClick={() => setMenuOpen(false)}>
            Healthcare Staffing
          </Link>
          <Link href="/clinical-cleaning" onClick={() => setMenuOpen(false)}>
            Clinical Cleaning
          </Link>
          <div className="nav-mobile-menu__separator" aria-hidden="true" />
          <Link href="/compliance" onClick={() => setMenuOpen(false)}>
            Compliance
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
        </div>
        <div className="nav-mobile-menu__buttons">
          <Link
            href="tel:07310086696"
            className="nav-mobile-menu__btn nav-mobile-menu__btn--tel"
            onClick={() => setMenuOpen(false)}
          >
            <FiPhone size={18} />
            07310 086 696
          </Link>
          <Link
            href="mailto:info@citadelmeds.co.uk"
            className="nav-mobile-menu__btn nav-mobile-menu__btn--primary"
            onClick={() => setMenuOpen(false)}
          >
            Request Staff Now
          </Link>
        </div>
      </div>

      {/* Overlay behind mobile menu */}
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Nav;
