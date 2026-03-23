/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./value.css";
import { valueData } from "./valueData";

const ValueCard = ({ image, title, description }) => {
  return (
    <article className="value-card">
      <div className="value-card__visual">
        <img src={image} alt="" className="value-card__visual-img" />
      </div>
      <div className="value-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

const Value = () => {
  return (
    <section className="value section-padding">
      <h2>Why Healthcare Providers Choose Citadel Meds</h2>
      <div className="value-grid">
        {valueData.map((item) => (
          <ValueCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Value;
