/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./solutions.css";
import { solutionData } from "./solutionData";
import Link from "next/link";
import { ctaBgElement, SupportHeadsetIcon } from "../../public/images";

const SolutionCard = ({ image, title, description }) => {
  return (
    <article className="solution-card">
      <div className="solution-card__icon">
        <img src={image} alt="" width={32} height={32} />
      </div>
      <div className="solution-card__text">
        <h3>{title}</h3>
        {description ? <p className="solution-card__desc">{description}</p> : null}
      </div>
    </article>
  );
};

export const SolutionGrid = () => {
  return (
    <div className="solution-grid">
      {solutionData.map((solution) => (
        <SolutionCard
          key={solution.id}
          image={solution.image}
          title={solution.title}
          description={solution.description}
        />
      ))}
    </div>
  );
};

export const SolutionCta = ({
  title = "Need compliant healthcare staff urgently?",
  subtitle = "We respond instantly - active 24/7",
  primary = { label: "Request Staff Now", href: "mailto:info@citadelmeds.co.uk" },
  secondary = {
    label: "07310 086 696",
    href: "tel:07310086696",
    iconSrc:
      "https://res.cloudinary.com/dxu5abgqw/image/upload/v1773151403/call-receive_svgrepo.com_elxsxa.svg",
    iconAlt: "call",
  },
}) => {
  return (
    <div className="solutions-bottom__cta">
      <img
        src={ctaBgElement?.src ?? ctaBgElement}
        alt="bg-element"
        className="solutions-bottom__cta-bg-element"
      />
      <div className="solutions-bottom__cta-top">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="solutions-bottom__cta__buttons">
        <Link href={primary.href}>{primary.label}</Link>
        <Link href={secondary.href}>
          {secondary.iconSrc ? (
            <img src={secondary.iconSrc} alt={secondary.iconAlt ?? ""} />
          ) : null}{" "}
          {secondary.label}
        </Link>
      </div>
    </div>
  );
}

const Solutions = () => {
  return (
    <section className="solution section-padding">
      <div className="solution-top">
        <h1>Flexible Staffing Solutions</h1>
        <div className="solution-top-grid">
          <SolutionGrid />
          <div className="solution-top__single-grid">
            <img
              src={SupportHeadsetIcon?.src ?? SupportHeadsetIcon}
              alt=""
              width={32}
              height={32}
            />
            <h3>Available 24/7</h3>
            <p>to meet planned and unplanned staffing needs.</p>
          </div>
        </div>
      </div>
      <SolutionCta/>
    </section>
  );
};

export default Solutions;
