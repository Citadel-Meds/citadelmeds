"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useState } from "react";
import {
  complianceItems,
  GOVERNANCE_PILLARS,
  CHECK_ICON_URL,
  REGISTRATION_INTRO,
  REGISTRATION_CARDS,
  WORKFORCE_SAFETY_INTRO,
  WORKFORCE_SAFETY_CARDS,
  POLICIES_INTRO,
  POLICY_ICON_URL,
  POLICY_CHECK_ICON_URL,
  KEY_POLICY_AREAS_LEFT,
  KEY_POLICY_AREAS_RIGHT,
  CONTINUOUS_QUALITY_TITLE,
  CONTINUOUS_QUALITY_TEXT,
} from "./complianceData";
import "./compliance.css";

const ChevronDown = ({ isOpen }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`compliance-item__chevron ${isOpen ? "compliance-item__chevron--up" : ""}`}
    aria-hidden="true"
  >
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GOVERNANCE_ID = 1;
const REGISTRATION_INSURANCE_ID = 2;
const WORKFORCE_SAFETY_ID = 3;
const POLICIES_QUALITY_ID = 4;

const Compliance = () => {
  const [openId, setOpenId] = useState(null);

  const idToHash = useMemo(
    () => ({
      [GOVERNANCE_ID]: "governance-framework",
      [REGISTRATION_INSURANCE_ID]: "registration-insurance",
      [WORKFORCE_SAFETY_ID]: "workforce-safety",
      [POLICIES_QUALITY_ID]: "quality-monitoring",
    }),
    []
  );

  const hashToId = useMemo(
    () => ({
      "governance-framework": GOVERNANCE_ID,
      "registration-insurance": REGISTRATION_INSURANCE_ID,
      "workforce-safety": WORKFORCE_SAFETY_ID,
      "quality-monitoring": POLICIES_QUALITY_ID,
      "policies-quality-monitoring": POLICIES_QUALITY_ID,
    }),
    []
  );

  const scrollToHash = (hash, behavior = "smooth") => {
    const el = document.getElementById(hash);
    if (!el) return;

    // Two RAFs: allow state update + layout reflow before scrolling.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        el.scrollIntoView({ behavior, block: "start" });
      });
    });
  };

  useEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash || "";
      const slug = raw.replace(/^#/, "").trim();
      const id = hashToId[slug];
      if (!id) return;

      setOpenId(id);
      scrollToHash(slug, "auto");
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [hashToId]);

  const toggle = (id) => {
    setOpenId((prev) => {
      const next = prev === id ? null : id;

      // Keep URL in sync so links can deep-link to a specific dropdown.
      if (next) {
        const slug = idToHash[next] ?? "quality-monitoring";
        window.history.replaceState(null, "", `#${slug}`);

        // Scroll the card into view after opening.
        scrollToHash(slug, "smooth");
      }

      return next;
    });
  };

  return (
    <section className="compliance section-padding">
      <div className="compliance__list">
        {complianceItems.map((item) => {
          const isOpen = openId === item.id;
          const isGovernance = item.id === GOVERNANCE_ID;
          const isRegistration = item.id === REGISTRATION_INSURANCE_ID;
          const isWorkforceSafety = item.id === WORKFORCE_SAFETY_ID;
          const isPoliciesQuality = item.id === POLICIES_QUALITY_ID;

          return (
            <div
              key={item.id}
              className={`compliance-card ${isOpen ? "compliance-card--open" : ""}`}
              id={idToHash[item.id] ?? undefined}
            >
              <button
                type="button"
                className="compliance-item"
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={
                  isGovernance
                    ? "compliance-panel-governance"
                    : isRegistration
                      ? "compliance-panel-registration"
                      : isWorkforceSafety
                        ? "compliance-panel-workforce"
                        : isPoliciesQuality
                          ? "compliance-panel-policies"
                          : undefined
                }
                id={`compliance-trigger-${item.id}`}
              >
                <div className="compliance-item__icon-wrap">
                  <img
                    src={item.icon}
                    alt=""
                    className="compliance-item__icon"
                    width={40}
                    height={40}
                  />
                </div>
                <span className="compliance-item__label">{item.label}</span>
                <ChevronDown isOpen={isOpen} />
              </button>

              {isGovernance && isOpen && (
                <div
                  id="compliance-panel-governance"
                  className="compliance-panel"
                  role="region"
                  aria-labelledby={`compliance-trigger-${item.id}`}
                >
                  <div className="compliance-panel__text">
                    <p className="compliance-panel__p">
                      Our governance framework is comprehensively aligned with
                      the <strong>CQC Fundamental Standards</strong> and{" "}
                      <strong>NHS requirements</strong>, ensuring that every
                      aspect of our service delivery meets the highest regulatory
                      expectations.
                    </p>
                    <p className="compliance-panel__p">
                      We maintain rigorous oversight of all operational
                      processes, from staff deployment to quality monitoring,
                      ensuring continuous compliance with healthcare sector
                      regulations and best practices.
                    </p>
                  </div>
                  <div className="compliance-panel__pillars">
                    {GOVERNANCE_PILLARS.map((label) => (
                      <div key={label} className="compliance-pillar">
                        <div className="compliance-pillar__icon-wrap">
                          <img
                            src={CHECK_ICON_URL}
                            alt=""
                            className="compliance-pillar__icon"
                            width={32}
                            height={32}
                          />
                        </div>
                        <span className="compliance-pillar__label">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isRegistration && isOpen && (
                <div
                  id="compliance-panel-registration"
                  className="compliance-panel"
                  role="region"
                  aria-labelledby={`compliance-trigger-${item.id}`}
                >
                  <p className="compliance-panel__p">
                    {REGISTRATION_INTRO}
                  </p>
                  <div className="compliance-panel__cards">
                    {REGISTRATION_CARDS.map((card) => (
                      <div
                        key={card.id}
                        className="compliance-feature-card"
                      >
                        <div className="compliance-feature-card__icon-wrap">
                          <img
                            src={card.icon}
                            alt=""
                            className="compliance-feature-card__icon"
                            width={32}
                            height={32}
                          />
                        </div>
                        <h4 className="compliance-feature-card__title">
                          {card.title}
                        </h4>
                        <p className="compliance-feature-card__desc">
                          {card.line1}
                          <br />
                          {card.line2}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isWorkforceSafety && isOpen && (
                <div
                  id="compliance-panel-workforce"
                  className="compliance-panel"
                  role="region"
                  aria-labelledby={`compliance-trigger-${item.id}`}
                >
                  <p className="compliance-panel__p">
                    {WORKFORCE_SAFETY_INTRO}
                  </p>
                  <div className="compliance-panel__cards compliance-panel__cards--vertical">
                    {WORKFORCE_SAFETY_CARDS.map((card) => (
                      <div
                        key={card.id}
                        className="compliance-feature-card compliance-feature-card--row"
                      >
                        <div className="compliance-feature-card__icon-wrap">
                          <img
                            src={card.icon}
                            alt=""
                            className="compliance-feature-card__icon"
                            width={32}
                            height={32}
                          />
                        </div>
                        <div className="compliance-feature-card__body">
                          <h4 className="compliance-feature-card__title">
                            {card.title}
                          </h4>
                          <p className="compliance-feature-card__desc">
                            {card.line1}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isPoliciesQuality && isOpen && (
                <div
                  id="compliance-panel-policies"
                  className="compliance-panel"
                  role="region"
                  aria-labelledby={`compliance-trigger-${item.id}`}
                >
                  <p className="compliance-panel__p">
                    Our operational excellence is supported by{" "}
                    <strong>28 CQC-aligned policies</strong> covering all
                    aspects of service delivery, staff conduct, and quality
                    assurance.
                  </p>

                  <div className="compliance-panel__block">
                    <div className="compliance-panel__subhead">
                      <div className="compliance-panel__subhead-icon">
                        <img
                          src={POLICY_ICON_URL}
                          alt=""
                          width={32}
                          height={32}
                        />
                      </div>
                      <h3 className="compliance-panel__subhead-title">
                        Key Policy Areas
                      </h3>
                    </div>
                    <div className="compliance-panel__two-col">
                      <ul className="compliance-panel__check-list">
                        {KEY_POLICY_AREAS_LEFT.map((label) => (
                          <li key={label} className="compliance-panel__check-item">
                            <img
                              src={POLICY_CHECK_ICON_URL}
                              alt=""
                              className="compliance-panel__check-icon"
                              width={24}
                              height={24}
                            />
                            <span>{label}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="compliance-panel__check-list">
                        {KEY_POLICY_AREAS_RIGHT.map((label) => (
                          <li key={label} className="compliance-panel__check-item">
                            <img
                              src={POLICY_CHECK_ICON_URL}
                              alt=""
                              className="compliance-panel__check-icon"
                              width={24}
                              height={24}
                            />
                            <span>{label}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="compliance-panel__block compliance-panel__block--border">
                    <h3 className="compliance-panel__border-title">
                      {CONTINUOUS_QUALITY_TITLE}
                    </h3>
                    <p className="compliance-panel__p">
                      {CONTINUOUS_QUALITY_TEXT}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Compliance;
