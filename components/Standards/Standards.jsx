/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import "./standards.css";
import Link from "next/link";
import { ArrowRight } from "iconsax-reactjs";
import { standardsData } from "./standardsData";
import { NurseElderlyPatientImage, StaffsImage } from "../../public/images";
import { useQuoteModal } from "../QuoteModal/QuoteModalProvider";

const StandardsCard = ({ image, description }) => {
  return (
    <div className="standards-card">
      <div className="standards-card__icon">
        <img src={image} alt={description} />
      </div>
      <p>{description}</p>
    </div>
  );
};

const Standards = () => {
  const { openQuoteModal, isQuoteModalOpen } = useQuoteModal();

  return (
    <section className="standards section-padding">
      <div className="standards__first-grid">
        <h1 className="standards__first-grid__item-1">
          Your Trusted Platform for UK-Based Healthcare Staffing & Clinical
          Cleaning Services
        </h1>
        <div className="standards__first-grid__item-2">
          <p>
            Delivering elite medical staffing and specialized clinical cleaning
            to ensure total operational safety across the UK healthcare sector.
            Your dedicated partner for CQC-compliant talent and sterile
            environment maintenance, built on unwavering reliability and
            excellence.
          </p>
          <div className="standards__first-grid__item-2__buttons">
            <Link href="/contact">Get in Contact</Link>
            <button
              type="button"
              onClick={openQuoteModal}
              aria-haspopup="dialog"
              aria-expanded={isQuoteModalOpen}
            >
              Get a Free Quote
            </button>
          </div>
        </div>
        <div
          className="standards__first-grid__item-3 standards__photo"
          role="img"
          aria-label="Healthcare professionals in medical setting"
        >
          <div
            className="standards__photo__bg"
            style={{
              backgroundImage: `url(${StaffsImage?.src ?? StaffsImage})`,
            }}
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="standards__second-grid">
        <div className="standards__second-grid_left">
          <h1>Built on CQC Fundamental Standards</h1>
          <p>
            Our services are governed by robust policies and quality assurance
            processes aligned with CQC and NHS expectations.
          </p>
          <Link href="/compliance#governance-framework" className="standards__second-grid_left-cta">
            View Compliance & Governance
            <ArrowRight size="24" color="var(--white)" />
          </Link>
          <div
            className="standards__second-grid_left-img standards__photo"
            role="img"
            aria-label="Healthcare professional with patient"
          >
            <div
              className="standards__photo__bg"
              style={{
                backgroundImage: `url(${NurseElderlyPatientImage?.src ?? NurseElderlyPatientImage})`,
              }}
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="standards__second-grid_right">
          {standardsData.map((item) => (
            <StandardsCard
              key={item.id}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Standards;
