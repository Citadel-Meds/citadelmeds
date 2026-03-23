/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import "./hero.css";
import { IoCheckbox } from "react-icons/io5";
import { professionalRequirements } from "./professionalRequirements";
import { TbSquareCheckFilled } from "react-icons/tb";
import { useQuoteModal } from "../QuoteModal/QuoteModalProvider";
import { HeroImageStaff, InteractionImage } from "../../public/images";

const ProfessionalRequirements = ({ label }) => {
  return (
    <div className="professional-requirement">
      <TbSquareCheckFilled className="professional-requirement__icon" />
      {label}
    </div>
  );
};

const Hero = () => {
  const { openQuoteModal, isQuoteModalOpen } = useQuoteModal();

  return (
    <div className="hero">
      <div className="hero-top">
        <div className="hero-top__contents">
          <h1>
            Reliable, Fully Vetted Healthcare Staff -{" "}
            <span> Available 24/7</span>
          </h1>
          <p>
            We supply compliant nurses, healthcare assistants, support workers,
            and clinical cleaning services to hospitals, supported living, care
            homes, and community providers across the UK.
          </p>
          <div className="hero-top__professional-requirements">
            {professionalRequirements.map((requirement) => (
              <ProfessionalRequirements
                key={requirement.id}
                label={requirement.label}
              />
            ))}
          </div>
        </div>
        <div className="hero-top__buttons">
          <button
            type="button"
            onClick={openQuoteModal}
            aria-haspopup="dialog"
            aria-expanded={isQuoteModalOpen}
            className="hero-top__cta"
          >
            Get a Free Quote
          </button>
          <Link href="mailto:info@citadelmeds.co.uk">Request Staff Now</Link>
        </div>
      </div>
      <img
        src={InteractionImage?.src ?? InteractionImage}
        alt="hero-image"
        className="hero-top__image"
      />
      <img
        src={HeroImageStaff?.src ?? HeroImageStaff}
        alt="hero-image-2"
        className="hero-top__image-2"
      />
    </div>
  );
};

export default Hero;
