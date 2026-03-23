import React from "react";
import { PageHero } from "../../../../../components";
import { ContactHeroImage } from "../../../../../public/images";

const Contact = () => {
  return (
    <div>
      <PageHero
        title="Need staffing support?"
        description="We're available 24/7 to support your service."
        backgroundImage={ContactHeroImage?.src ?? ContactHeroImage}
      />
    </div>
  );
};

export default Contact;
