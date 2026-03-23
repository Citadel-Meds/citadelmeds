/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./services.css";
import { TbSquareCheckFilled } from "react-icons/tb";
import Link from "next/link";
import { ArrowRight } from "iconsax-reactjs";
import { ClinicalCleaningImage, HealthcareStaffingImage } from "../../public/images";

const resolveImageUrl = (src) =>
  typeof src === "string" ? src : src?.src ?? src;

const ServiceImageCard = ({ src, alt }) => {
  const url = resolveImageUrl(src);
  return (
    <div className="service-image-card" role="img" aria-label={alt}>
      <div
        className="service-image-card__bg"
        style={{ backgroundImage: `url(${url})` }}
        aria-hidden="true"
      />
    </div>
  );
};

const ServiceItemList = ({ listItem, variant }) => {
  return (
    <div className="service-item-list">
      <TbSquareCheckFilled
        className={`service-item-list__icon ${variant === "alternate" ? "service-item-list__icon--alternate" : ""}`}
      />
      <p>{listItem}</p>
    </div>
  );
};

const ServiceItem = ({
  title,
  description,
  icon,
  buttonText,
  buttonHref = "/",
  variant = "default",
  listItems = [
    "Registered Nurses (Bands 5–7)",
    "Healthcare Assistants (HCAs)",
    "Support Workers",
    "Ancillary Staff",
  ],
}) => {
  const variantClass = variant === "alternate" ? "service-item--alternate" : "";
  return (
    <div className={`service-item ${variantClass}`}>
      <div className="service-item__icon">
        <img src={icon} alt="service-icon" className="service-item__icon-image" />
      </div>
      <div className="service-item__text">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="service-item__list">
          {listItems.map((item) => (
            <ServiceItemList key={item} listItem={item} variant={variant} />
          ))}
        </div>
        <Link href={buttonHref} className="service-item__button">
          <p>{buttonText}</p>
          <ArrowRight
            size={20}
            color={variant === "alternate" ? "var(--indigo)" : "var(--primary)"}
            aria-hidden
          />
        </Link>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="services section-padding">
      <h2>Services We Offer</h2>
      <div className="services-grid">
        <ServiceImageCard
          src={ClinicalCleaningImage?.src ?? ClinicalCleaningImage}
          alt="Healthcare professionals"
        />
        <ServiceItem
          variant="default"
          title={"Healthcare Staffing Services"}
          description={
            "Flexible, fully vetted healthcare professionals supplied at short notice or long-term."
          }
          icon={
            "https://res.cloudinary.com/dxu5abgqw/image/upload/v1772922820/nurse_svgrepo.com_mo8h4g.svg"
          }
          buttonText={"View Staffing Service"}
          buttonHref="/healthcare-staffing"
          listItems={[
            "Registered Nurses (Bands 5–7)",
            "Healthcare Assistants (HCAs)",
            "Support Workers",
            "Ancillary Staff",
          ]}
        />
        <ServiceItem
          variant="alternate"
          title={"Clinical Cleaning & Infection Prevention"}
          description={
            "Clinically safe cleaning services supporting infection prevention and regulatory compliance."
          }
          icon={
            "https://res.cloudinary.com/dxu5abgqw/image/upload/v1772967902/hospital_svgrepo.com_fgyheg.svg"
          }
          buttonText={"View Cleaning Services"}
          buttonHref="/clinical-cleaning"
          listItems={[
            "Hospital & care home cleaning",
            "Deep & terminal cleaning",
            "NHS-aligned standards",
          ]}
        />
        <ServiceImageCard
          src={HealthcareStaffingImage?.src ?? HealthcareStaffingImage}
          alt="Hospital cleaning"
        />
      </div>
    </section>
  );
};

export default Services;
