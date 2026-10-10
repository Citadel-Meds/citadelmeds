export const metadata = { title: 'Clinical Cleaning', description: 'Specialist clinical cleaning services supporting infection prevention and safe care environments.', alternates: { canonical: '/clinical-cleaning' } };

import React from "react";
import "./cleaning.css";
import { CleaningHero, CleaningServices, Compliance } from "./components";
import { Footer } from "../../../components";
import { CTA } from "../healthcare-staffing/components";

const page = () => {
  return (
    <div>
      <CleaningHero />
      <CleaningServices />
      <Compliance />
      <CTA
        title="Need Clinical Cleaning Support?"
        subtitle="Contact us today to discuss your clinical cleaning requirements and receive a tailored service proposal."
        primary={{ label: "Request Cleaning Services", href: "mailto:info@citadelmeds.co.uk" }}
        secondary={{
          label: "07310 086 696",
          href: "tel:07310086696",
          iconSrc:
            "https://res.cloudinary.com/dxu5abgqw/image/upload/v1773151403/call-receive_svgrepo.com_elxsxa.svg",
          iconAlt: "call",
        }}
      />
      <Footer />
    </div>
  );
};

export default page;
