import React from "react";
import { PageHero } from "../../../../../components";
import { ComplianceHeroImage } from "../../../../../public/images";

const ClinicalHero = () => {
  return (
    <PageHero
      title="Governance, Compliance & Quality Assurance"
      description="Our commitment to excellence is underpinned by robust governance frameworks, regulatory compliance, and continuous quality monitoring aligned with CQC and NHS standards."
      backgroundImage={ComplianceHeroImage?.src ?? ComplianceHeroImage}
    />
  );
};

export default ClinicalHero;
