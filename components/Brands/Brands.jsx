/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./brands.css";
import { hiscox, hmrev, ico, manchester, nhs, nmc } from "../../public/images";

const Brands = () => {
  return (
    <section className="brands">
      <div className="brands__list" aria-label="Compliance institutions">
        <div className="brands__item brands__item--ico">
          <img src={ico?.src ?? ico} alt="ICO" />
        </div>
        <div className="brands__item brands__item--hiscox">
          <img src={hiscox?.src ?? hiscox} alt="Hiscox" />
        </div>
        <div className="brands__item brands__item--hmrev">
          <img src={hmrev?.src ?? hmrev} alt="HM Revenue & Customs" />
        </div>
        <div className="brands__item brands__item--nmc">
          <img src={nmc?.src ?? nmc} alt="Nursing & Midwifery Council" />
        </div>
        <div className="brands__item brands__item--nhs">
          <img src={nhs?.src ?? nhs} alt="NHS" />
        </div>
        <div className="brands__item brands__item--manchester">
          <img src={manchester?.src ?? manchester} alt="Manchester" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
