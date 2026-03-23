"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  SECTION_TITLE,
  SECTION_SUBTITLE,
  SERVICE_CARDS,
  NHS_CARD,
  CLEANING_IMAGE_URL,
} from "./cleaningData";
import "./cleaningServices.css";

const CleaningServices = () => {
  return (
    <section className="cleaning-services section-padding">
      <div className="cleaning-services__inner">
        <header className="cleaning-services__header">
          <h2 className="cleaning-services__title">{SECTION_TITLE}</h2>
          <p className="cleaning-services__subtitle">{SECTION_SUBTITLE}</p>
        </header>

        <div className="cleaning-services__grid">
          {/* Row 1 & 2: four service cards in 2x2 */}
          {SERVICE_CARDS.map((card) => (
            <article
              key={card.id}
              className="cleaning-service-card"
              aria-labelledby={`cleaning-card-title-${card.id}`}
            >
              <div className="cleaning-service-card__icon-wrap">
                <img
                  src={card.icon}
                  alt=""
                  className="cleaning-service-card__icon"
                  width={24}
                  height={32}
                />
              </div>
              <h3
                id={`cleaning-card-title-${card.id}`}
                className="cleaning-service-card__title"
              >
                {card.title}
              </h3>
              <p className="cleaning-service-card__desc">{card.description}</p>
            </article>
          ))}

          {/* Row 3: NHS card spans both columns */}
          <article
            className="cleaning-service-card cleaning-service-card--full"
            aria-labelledby="cleaning-card-title-nhs"
          >
            <div className="cleaning-service-card__icon-wrap">
              <img
                src={NHS_CARD.icon}
                alt=""
                className="cleaning-service-card__icon"
                width={24}
                height={32}
              />
            </div>
            <div className="cleaning-service-card__content">
              <h3
                id="cleaning-card-title-nhs"
                className="cleaning-service-card__title"
              >
                {NHS_CARD.title}
              </h3>
              <p className="cleaning-service-card__desc">{NHS_CARD.description}</p>
            </div>
          </article>

          {/* Row 4: large image (background layer for smooth zoom) */}
          <div
            className="cleaning-services__image-wrap"
            role="img"
            aria-label="Clinical cleaning services"
          >
            <div
              className="cleaning-services__image-bg"
              style={{ backgroundImage: `url(${CLEANING_IMAGE_URL})` }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleaningServices;
