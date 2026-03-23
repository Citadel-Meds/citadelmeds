import React from "react";
import { PageHero } from "../../../../../components";
import { CleaningHeroImage } from "../../../../../public/images";

const CleaningHero = () => {
  return (
    <PageHero
      title="Clinical Cleaning That Supports"
      titleHighlight="Safe Care"
      description="Our clinical cleaning services are designed to support infection prevention, regulatory compliance, and patient safety across healthcare environments."
      backgroundImage={CleaningHeroImage?.src ?? CleaningHeroImage}
    />
  );
};

export default CleaningHero;
