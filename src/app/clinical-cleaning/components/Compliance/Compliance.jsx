"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./compliance.css";
import { Visual1 } from "../../../../../public/images";

const COMPLIANCE_IMAGE_URL = Visual1?.src ?? Visual1;

const TITLE = "Compliance & Quality Assurance";
const DESCRIPTION =
  "All our clinical cleaning staff undergo enhanced DBS checks, infection prevention training, and regular competency assessments. We maintain detailed cleaning schedules, audit trails, and quality monitoring systems aligned with CQC expectations and NHS standards.";

const Compliance = () => {
  return (
    <section className="compliance section-padding">
      <div className="compliance__card">
        <div className="compliance__media">
          <img
            src={COMPLIANCE_IMAGE_URL}
            alt="Compliance and quality assurance - CQC and NHS aligned, verified staff"
            className="compliance__image"
          />
        </div>
        <div className="compliance__content">
          <h2 className="compliance__title">{TITLE}</h2>
          <p className="compliance__description">{DESCRIPTION}</p>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
