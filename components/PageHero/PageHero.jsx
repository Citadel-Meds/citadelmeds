/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./PageHero.css";
import Nav from "../Nav/Nav";

const PageHero = ({
  title,
  titleHighlight,
  description,
  backgroundImage,
  backgroundOverlay,
}) => {
  return (
    <section
      className="page-hero section-padding"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : undefined
      }
    >
      {backgroundOverlay && (
        <img
          src={backgroundOverlay}
          alt=""
          className="page-hero__bg-overlay"
          aria-hidden="true"
        />
      )}
      <Nav />
      <div className="page-hero__contents">
        <h1>
          {title}
          {titleHighlight && (
            <span className="page-hero__title-highlight"> {titleHighlight}</span>
          )}
        </h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
};

export default PageHero;
