/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import "./footer.css";
import { callIcon, emailIcon, FooterBg, FooterImage } from "../../public/images";

const footerLinks = {
  services: [
    { id: "s1", label: "Healthcare Staffing", href: "/healthcare-staffing" },
    { id: "s2", label: "Cleaning Service", href: "/clinical-cleaning" },
    { id: "s3", label: "Registered Nurses", href: "/healthcare-staffing" },
    { id: "s4", label: "Healthcare Assistants", href: "/healthcare-staffing" },
  ],
  compliance: [
    { id: "c1", label: "Governance Framework", href: "/compliance#governance-framework" },
    { id: "c2", label: "Registration & Insurance", href: "/compliance#registration-insurance" },
    { id: "c3", label: "Workforce Safety", href: "/compliance#workforce-safety" },
    { id: "c4", label: "Quality Monitoring", href: "/compliance#quality-monitoring" },
  ],
  company: [
    { id: "co2", label: "Contact Us", href: "/contact" },
    { id: "co3", label: "Career", href: "mailto:info@citadelmeds.co.uk" },
  ],
};

const PHONE = "07310 086 696";
const EMAIL = "info@citadelmeds.co.uk";
const OUTLOOK_EMAIL = "citadelmeds@outlook.com";

const PHONE_ICON_URL =
  callIcon?.src ?? callIcon;
const EMAIL_ICON_URL =
  emailIcon?.src ?? emailIcon;

const LINKEDIN_HREF = "http://www.linkedin.com/in/citadel-meds-3766013b1";
const INSTAGRAM_HREF =
  "https://www.instagram.com/citadelmeds?igsh=dW44dDdodW45NDVi";
const WHATSAPP_HREF = "https://wa.me/message/X3XQRC6F27FDM1";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src={FooterBg?.src ?? FooterBg}
        alt="footer bg element"
        className="footer__bg-element"
      />
      <div className="footer__grid">
        <div className="footer__column">
          <h3 className="footer__heading">Services</h3>
          <ul className="footer__list">
            {footerLinks.services.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="footer__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__heading">Compliance</h3>
          <ul className="footer__list">
            {footerLinks.compliance.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="footer__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__column">
          <h3 className="footer__heading">Company</h3>
          <ul className="footer__list">
            {footerLinks.company.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="footer__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__column footer__column--contact">
          <h3 className="footer__heading footer__heading--contact">Contact</h3>
          <div className="footer__contact">
            <a href="tel:07310086696" className="footer__contact-item">
              <img src={PHONE_ICON_URL} alt="" width={24} height={24} />
              <span>{PHONE}</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="footer__contact-item">
              <img src={EMAIL_ICON_URL} alt="" width={24} height={24} />
              <span>{EMAIL}</span>
            </a>
            <a
              href={`mailto:${OUTLOOK_EMAIL}`}
              className="footer__contact-item"
            >
              <img src={EMAIL_ICON_URL} alt="" width={24} height={24} />
              <span>{OUTLOOK_EMAIL}</span>
            </a>
          </div>
          <div className="footer__social">
            <a
              href={LINKEDIN_HREF}
              className="footer__social-btn"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/linkedin-icon.svg" alt="" />
            </a>
            <a
              href={INSTAGRAM_HREF}
              className="footer__social-btn"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/instagram-logo.svg" alt="" />
            </a>
            <a
              href={WHATSAPP_HREF}
              className="footer__social-btn"
              aria-label="WhatsApp"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/whatsapp-icon.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__separator" />
      <div className="footer__values">
        <Link href="/" className="footer__values-item">
          Excellence
        </Link>
        <span className="footer__values-dot" aria-hidden>
          •
        </span>
        <Link href="/" className="footer__values-item">
          Dignity
        </Link>
        <span className="footer__values-dot" aria-hidden>
          •
        </span>
        <Link href="/" className="footer__values-item">
          Integrity
        </Link>
        <span className="footer__values-dot" aria-hidden>
          •
        </span>
        <Link href="/" className="footer__values-item">
          Compassion
        </Link>
        <span className="footer__values-dot" aria-hidden>
          •
        </span>
        <Link href="/" className="footer__values-item">
          Reliability
        </Link>
      </div>
      <img
        src={FooterImage?.src ?? FooterImage}
        alt="registered logo"
        className="footer__logo"
      />
    </footer>
  );
};

export default Footer;
