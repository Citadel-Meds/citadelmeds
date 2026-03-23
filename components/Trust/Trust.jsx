/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./trust.css";
import { trustData } from "./trustData";

const TrustItem = ({ name, image }) => {
  return (
    <div className="trust-item">
      <div className="trust-item__icon">
        <img src={image} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  );
};
const Trust = () => {
  return (
    <section className="trust section-padding">
      {trustData.map((item) => (
        <TrustItem key={item.id} name={item.name} image={item.image} />
      ))}
    </section>
  );
};

export default Trust;
