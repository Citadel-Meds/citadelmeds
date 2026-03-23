import { billIcon, brushIcon, CleanersImage, HomeHeart, hospitalSv, shieldPlusIcon } from "../../../../../public/images";

export const SECTION_TITLE = "Our Clinical Cleaning Services";
export const SECTION_SUBTITLE =
  "Delivering infection prevention and control through professional, compliant cleaning services tailored to healthcare environments.";

export const SERVICE_CARDS = [
  {
    id: "hospital-ward",
    icon: hospitalSv?.src ?? hospitalSv,
    title: "Hospital Ward & Clinical Area Cleaning",
    description:
      "Comprehensive cleaning protocols for wards, theatres, and clinical spaces maintaining the highest hygiene standards.",
  },
  {
    id: "care-home",
    icon: HomeHeart?.src ?? HomeHeart,
    title: "Care Home Hygiene Management",
    description:
      "Tailored cleaning schedules for residential care settings, ensuring dignity and safety for vulnerable residents.",
  },
  {
    id: "deep-terminal",
    icon: brushIcon?.src ?? brushIcon,
    title: "Deep & Terminal Cleaning",
    description:
      "Intensive cleaning procedures for infection outbreaks, room turnovers, and end-of-use decontamination.",
  },
  {
    id: "mrsa-cdiff",
    icon: shieldPlusIcon?.src ?? shieldPlusIcon,
    title: "MRSA & C. diff Protocols",
    description:
      "Specialist cleaning using evidence-based protocols to manage and prevent healthcare-associated infections.",
  },
];

export const NHS_CARD = {
  id: "nhs-standards",
  icon: billIcon?.src ?? billIcon,
  title: "NHS National Standards - Compliant Schedules",
  description:
    "All cleaning services follow NHS National Standards of Healthcare Cleanliness 2021 guidelines and frequency matrices.",
};

export const CLEANING_IMAGE_URL = CleanersImage?.src ?? CleanersImage;
