import React from "react";
import { processSteps, processBannerText } from "./processData";
import "./process.css";

const ProcessStep = ({ number, title, description, isLast }) => {
  return (
    <div className="process-item">
      <div className="process-item__indicator">
        <div className="process-item__number">{number}</div>
        {!isLast && <div className="process-item__line" aria-hidden="true" />}
      </div>
      <div className="process-item__card">
        <div className="process-item__text">
          <h3 className="process-item__title">{title}</h3>
          <p className="process-item__description">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Process = () => {
  return (
    <section className="process section-padding">
      <h1 className="process__heading">Our Safer Recruitment Process</h1>
      <div className="process__content">
        {processSteps.map((step) => (
          <ProcessStep
            key={step.id}
            number={step.number}
            title={step.title}
            description={step.description}
            isLast={step.id === processSteps.length}
          />
        ))}
        <div className="process__banner">
          <p className="process__banner-text">{processBannerText}</p>
        </div>
      </div>
    </section>
  );
};

export default Process;
